package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.PostResponse;
import fpt.edu.vn.backend.dto.UserResponseDto;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.impl.PostService;
import fpt.edu.vn.backend.service.impl.UserService;
import io.swagger.v3.oas.annotations.Hidden;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final UserService userService;
    private final PostService postService;

    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<?> searchUsers(
            @RequestParam(name = "pageNumber") int page,
            @RequestParam(name = "pageSize") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size);
            Page<User> users = userService.getAllUsers(pageable);
            Page<UserResponseDto> userResponseDtos = users.map(user ->
                    new UserResponseDto(user.getId(),user.getKnowAs(), user.getEmail(), user.getRole(), user.isAccountLocked())
            );

            return ResponseEntity.ok(userResponseDtos);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Đã xảy ra lỗi khi tìm kiếm người dùng: " + e.getMessage());
        }
    }

    @PostMapping("/lock/{userId}")
    public ResponseEntity<?> lockUserAccount(@PathVariable Integer userId, @AuthenticationPrincipal User currentUser) {
        try {
            userService.lockAccount(userId, currentUser);
            return ResponseEntity.ok(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while locking the user account.");
        }
    }

    @PostMapping("/unlock/{userId}")
    public ResponseEntity<?> unlockUserAccount(@PathVariable Integer userId, @AuthenticationPrincipal User currentUser) {
        try {
            userService.unlockAccount(userId, currentUser);
            return ResponseEntity.ok(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while unlocking the user account.");
        }
    }

    @GetMapping("/post-by-user/{userId}")
    public ResponseEntity<List<PostResponse>> getAllPostsByUserId(@PathVariable int userId) {
        try {
            List<PostResponse> posts = postService.getAllPostsByUserId(userId);
            return ResponseEntity.ok(posts);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(Collections.emptyList());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/post/{postId}")
    public ResponseEntity<?> deletePostByAdmin(@PathVariable int postId) {
        try {
            postService.deletePostByAdmin(postId);
            return ResponseEntity.ok(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the post");
        }
    }

    @PostMapping
    @PreAuthorize("hasAuthority('admin:create')")
    @Hidden
    public String post() {
        return "POST:: admin controller";
    }

    @PutMapping
    @PreAuthorize("hasAuthority('admin:update')")
    @Hidden
    public String put() {
        return "PUT:: admin controller";
    }
    @DeleteMapping
    @PreAuthorize("hasAuthority('admin:delete')")
    @Hidden
    public String delete() {
        return "DELETE:: admin controller";
    }
}