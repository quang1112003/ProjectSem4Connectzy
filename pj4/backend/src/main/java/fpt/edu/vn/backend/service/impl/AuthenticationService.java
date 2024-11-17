package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.AuthenticationRequest;
import fpt.edu.vn.backend.dto.AuthenticationResponse;
import fpt.edu.vn.backend.dto.RegisterRequest;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.helpers.VerificationCodeGenerator;
import fpt.edu.vn.backend.repository.*;
import fpt.edu.vn.backend.entity.User;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static fpt.edu.vn.backend.entity.Role.USER;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PhotoRepository photoRepository;
    private final EmailSenderService emailSenderService;

    public AuthenticationResponse register(RegisterRequest request) throws MessagingException {
        var existingKnowAs = userRepository.findByKnowAs(request.getKnowAs());
        if (existingKnowAs.isPresent()) {
            throw new RuntimeException("This Nickname is already taken, please choose another nickname");
        }

        var role = request.getRole() != null ? request.getRole() : USER;
        String verificationCode = VerificationCodeGenerator.generateCode();

        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .pass(passwordEncoder.encode(request.getPass()))
                .dateOfBirth(request.getDateOfBirth())
                .knowAs(request.getKnowAs())
                .gender(request.getGender())
                .dateCreated(LocalDateTime.now())
                .verificationCode(verificationCode)
                .lastActive(LocalDateTime.now())
                .role(role)
                .build();

        var savedUser = userRepository.save(user);

        emailSenderService.sendVerificationCode(request.getEmail(), verificationCode);

        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        return AuthenticationResponse.builder()
                .email(request.getEmail())
                .firstName(request.getFirstName())
                .gender(request.getGender())
                .photoUrl(getPhotoUrl(savedUser))
                .jwt(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!user.isConfirmEmail()) {
            throw new LockedException("Please confirm email before logging in.");
        }
        else if (user.isAccountLocked()) {
            throw new LockedException("Account is locked. Please contact support.");
        }

        // Thực hiện xác thực
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        user.setLastActive(LocalDateTime.now());
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        return AuthenticationResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .knowAs(user.getKnowAs())
                .firstName(user.getFirstName())
                .gender(user.getGender())
                .photoUrl(getPhotoUrl(user))
                .jwt(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    private String getPhotoUrl(User user) {
        List<Photo> photos = photoRepository.findByUser (user);
        for (Photo photo : photos) {
            if (photo.isMain()) {
                return photo.getUrl();
            }
        }

        return "";
    }
}
