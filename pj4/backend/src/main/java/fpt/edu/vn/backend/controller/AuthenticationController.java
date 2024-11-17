package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.*;
import fpt.edu.vn.backend.repository.UserRepository;
import fpt.edu.vn.backend.service.impl.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {
    private final AuthenticationService service;
    private final UserRepository userRepository;
    private final SmsService smsService;

    @GetMapping
    public ResponseEntity<Map<String, String>> cors() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Tui đã được kết nối");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterRequest request) {
        try {
            // Check if email is already taken
            var user = userRepository.findByEmail(request.getEmail());
            if (user.isPresent()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
            }

            // Call service to register user
            service.register(request);
            Map<String, String> response = new HashMap<>();
            response.put("title", "Account created successfully");
            response.put("message", "Please enter your email and password to log in to the system");

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            // Handle custom exceptions like knowAs already taken
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());

        } catch (Exception e) {
            // Handle unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred");
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");
        String code = requestBody.get("code");

        var user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (user.getVerificationCode().equals(code)) {
            user.setConfirmEmail(true); // Đánh dấu email đã xác thực
            user.setVerificationCode(null); // Xoá mã xác thực
            userRepository.save(user);
            return ResponseEntity.ok(new HashMap<String, String>() {{
                put("message", "Email verified successfully");
            }});
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new HashMap<String, String>() {{
                put("message", "Invalid verification code");
            }});
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        try {
            AuthenticationResponse response = service.authenticate(request);
            return ResponseEntity.ok(response);
        } catch (LockedException e) {
            // Gửi phản hồi 423 khi tài khoản bị khóa
            return ResponseEntity.status(HttpStatus.LOCKED)
                    .body(e.getMessage());
        } catch (BadCredentialsException e) {
            // Gửi 401 khi thông tin đăng nhập sai
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Incorrect account name or password");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Incorrect account name or password");
        }
    }

    @GetMapping("/process")
    public String processSMS() {
        return "SMS sent";
    }

    @PostMapping("/send-otp")
    public OtpResponseDto sendOtp(@RequestBody OtpRequest otpRequest) {
        log.info("inside sendOtp :: "+otpRequest.getUsername());
        return smsService.sendSMS(otpRequest);
    }

    @PostMapping("/validate-otp")
    public String validateOtp(@RequestBody OtpValidationRequest otpValidationRequest) {
        log.info("inside validateOtp :: "+otpValidationRequest.getUsername()+" "+otpValidationRequest.getOtpNumber());
        return smsService.validateOtp(otpValidationRequest);
    }

}
