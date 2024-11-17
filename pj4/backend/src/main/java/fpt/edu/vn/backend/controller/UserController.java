package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.*;
import fpt.edu.vn.backend.helpers.UserMapper;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.UploadImageFile;
import fpt.edu.vn.backend.service.impl.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    private final UploadImageFile uploadImageFile;

    @GetMapping("/countries")
    public ResponseEntity<?> fetchAndSaveCountries() {
        List<CountryDto> countries = userService.fetchAndSaveCountries();
        return ResponseEntity.ok(countries);
    }

    // Lấy và lưu danh sách State theo Country ISO
    @GetMapping("/countries/{countryIso}/states")
    public ResponseEntity<?> fetchAndSaveStates(@PathVariable String countryIso) {
        List<StateDto> states = userService.fetchAndSaveStates(countryIso);
        return ResponseEntity.ok(states);
    }

    // Lấy và lưu danh sách City theo Country ISO và State ISO
    @GetMapping("/countries/{countryIso}/states/{stateIso}/cities")
    public ResponseEntity<?> fetchAndSaveCities(
            @PathVariable String countryIso,
            @PathVariable String stateIso) {
        List<CityDto> cities = userService.fetchAndSaveCities(countryIso, stateIso);
        return ResponseEntity.ok(cities);
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<?>> getUsersWithFilters(
            @RequestParam(name = "pageNumber", defaultValue = "1") int pageNumber,
            @RequestParam(name = "pageSize", defaultValue = "8") int pageSize,
            @RequestParam(defaultValue = "") String knowAs,
            @RequestParam(defaultValue = "18") Integer minAge,
            @RequestParam(defaultValue = "99") Integer maxAge,
            @RequestParam(name = "gender", required = false) String gender,
            @RequestParam(defaultValue = "lastActive") String orderBy,
            @AuthenticationPrincipal User currentUser) {

        // Truyền currentUser vào service
        Page<?> memberResponses = userService.getUsersWithFilters(currentUser.getId(), knowAs, gender, minAge, maxAge, orderBy, pageNumber, pageSize, currentUser);

        // Tạo thông tin phân trang dưới dạng JSON-like string
        String paginationDetails = String.format("{\"currentPage\":%d,\"itemsPerPage\":%d,\"totalItems\":%d,\"totalPages\":%d}",
                memberResponses.getNumber() + 1,
                memberResponses.getSize(),
                memberResponses.getTotalElements(),
                memberResponses.getTotalPages());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Pagination", paginationDetails); // Thêm thông tin phân trang vào headers

        return ResponseEntity.ok().headers(headers).body(memberResponses.getContent());
    }

    // Lấy thông tin người dùng
    @GetMapping("/get-by-id/{userId}")
    public ResponseEntity<MemberResponse> getUserInfo(@PathVariable Integer userId, @AuthenticationPrincipal User currentUser) {
        try {
            MemberResponse response = userService.getUserInfo(currentUser.getId(), userId);
            return ResponseEntity.ok(response);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> findUserByEmail(@PathVariable String username, @AuthenticationPrincipal User currentUser) {
        try {
            // Truyền vào userRequesting (currentUser) vào service
            MemberResponse memberResponse = userService.findUserByEmail(username, currentUser);

            // Kiểm tra và trả về kết quả
            if (memberResponse == null) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok(memberResponse);
        } catch (Exception e) {
            log.error("Error finding user by email: {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }



    @GetMapping("/interest/get-all")
    public ResponseEntity<?> getInterest() {
        try {
            List<InterestDto> interestDto = userService.getAllInterests();
            return ResponseEntity.ok(interestDto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/set-main-photo/{photoId}")
    public ResponseEntity<PhotoResponse> setMainPhoto(
            @PathVariable int photoId,
            @AuthenticationPrincipal User currentUser) {

        try {
            PhotoResponse updatedPhoto = uploadImageFile.setMainPhoto(photoId, currentUser.getId());
            return ResponseEntity.ok(updatedPhoto);
        } catch (EntityNotFoundException e) {
            log.error("Photo not found", e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (IllegalStateException e) {
            log.error("Error setting main photo", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            log.error("Unexpected error", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/update-member")
    public ResponseEntity<MemberResponse> updateMember(
            @RequestBody MemberUpdateDto memberUpdateDto,
            @AuthenticationPrincipal User currentUser) {

        try {
            // Lấy thông tin người dùng hiện tại từ email
            User user = userService.getUserByEmail(currentUser.getEmail());
            if (user == null) {
                return ResponseEntity.notFound().build();
            }

            // Cập nhật và lưu người dùng
            user = userService.updateMember(user, memberUpdateDto);
            user = userService.saveUser(user);

            // Trả về thông tin người dùng đã cập nhật, không cần kiểm tra isFriend khi là chính mình
            var memberResponse = UserMapper.toMemberResponse(user, currentUser, false); // Không phải bạn bè

            return ResponseEntity.ok(memberResponse);
        } catch (DataAccessException e) {
            log.error("Database error updating member", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (EntityNotFoundException e) {
            log.error("Member not found", e);
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            log.error("Unexpected error updating member", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PatchMapping
    public ResponseEntity<?> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        userService.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/upload-image")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            if (file.getSize() > 10 * 1024 * 1024) {
                return ResponseEntity.badRequest().body("File size exceeds the limit of 10MB");
            }

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null) {
                return ResponseEntity.badRequest().body("Authentication failed");
            }

            int userId = ((User) authentication.getPrincipal()).getId();
            return ResponseEntity.ok(uploadImageFile.uploadImage(file, userId));
        } catch (IOException | RuntimeException e) {
            return ResponseEntity.badRequest().body("Error uploading image: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("An error occurred: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete-image/{photoId}")
    public ResponseEntity<Map<String, String>> deleteImage(@PathVariable int photoId) {
        try {
            uploadImageFile.deletePhoto(photoId);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Photo deleted successfully");
            return ResponseEntity.ok(response);  // Return JSON object
        } catch (RuntimeException | IOException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);  // Return JSON object
        }
    }

    @GetMapping("/{username}/avatar")
    public ResponseEntity<String> getAvatar(@PathVariable String username) {
        try {
            String avatarUrl = userService.getAvatarUrlByUsername(username);
            return ResponseEntity.ok(avatarUrl);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            log.error("Error getting user avatar URL for user {}", username, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



}

