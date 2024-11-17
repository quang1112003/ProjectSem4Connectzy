package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.PostRequest;
import fpt.edu.vn.backend.dto.PostResponse;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.impl.PostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/post")
@RequiredArgsConstructor
@Slf4j
public class PostController {
    private final PostService postService;

    //get all post friends
    @GetMapping("/friends")
    public ResponseEntity<?> getPostsByFriends(@AuthenticationPrincipal User user) {
        try {
            List<PostResponse> posts = postService.getPostsByFriends(user.getId());
            if (posts.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No posts available from friends.");
            }
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching posts.");
        }
    }

    @GetMapping
    public ResponseEntity<List<PostResponse>> getPostsByUserId(
            @RequestParam(required = false) Integer userId,
            @AuthenticationPrincipal User currentUserId) {
        try {
            if (userId == null) {
                return ResponseEntity.badRequest()
                        .body(Collections.emptyList());
            }

            List<PostResponse> posts = postService.getPostsByUserId(userId, currentUserId.getId());

            if (posts.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT)
                        .body(Collections.emptyList());
            }

            return ResponseEntity.ok(posts);
        } catch (RuntimeException e) {
            // Logging error (nếu cần)
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(Collections.emptyList());
        } catch (Exception e) {
            // Logging lỗi bất ngờ để dễ dàng chẩn đoán
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<?> createPost(
            @AuthenticationPrincipal User currentUser,
            @ModelAttribute PostRequest postRequest,
            @RequestParam(required = false) List<MultipartFile> files) {
        try {
            postService.createPost(currentUser.getId(), postRequest, files);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, String> error = new HashMap<>();
            error.put("message", "Internal Server Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    // Cập nhật bài viết hiện tại
    @PutMapping("/{postId}")
    public ResponseEntity<PostResponse> updatePost(
            @PathVariable int postId,
            @AuthenticationPrincipal User currentUser,
            @RequestBody PostRequest postRequest) {
        try {
            PostResponse postResponse = postService.updatePost(postId, currentUser.getId(), postRequest);
            return ResponseEntity.ok(postResponse);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(null);
        } catch (Exception e) {
            // Trường hợp lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    // Thêm ảnh vào bài viết hiện tại
    @PostMapping("/{postId}/photos")
    public ResponseEntity<PostResponse> addPhotosToPost(
            @PathVariable int postId,
            @AuthenticationPrincipal User currentUser,
            @RequestParam List<MultipartFile> files) {
        try {
            PostResponse postResponse = postService.addPhotosToPost(postId, currentUser.getId(), files);
            return ResponseEntity.ok(postResponse);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }

    // Xóa ảnh khỏi bài viết hiện tại
    @DeleteMapping("/{postId}/photos/{photoId}")
    public ResponseEntity<Map<String, String>> removePhotoFromPost(
            @PathVariable int postId,
            @PathVariable int photoId,
            @AuthenticationPrincipal User currentUser ) {
        try {
            postService.removePhotoFromPost(postId, photoId, currentUser .getId());
            Map<String, String> response = new HashMap<>();
            response.put("message", "Photo removed from post successfully");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Post or Photo not found, or user does not own the post");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Failed to remove photo from post");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<Map<String, String>> deletePost(
            @PathVariable int postId,
            @AuthenticationPrincipal User currentUser) {
        Map<String, String> response = new HashMap<>();
        try {
            postService.deletePost(postId, currentUser.getId());
            response.put("status", "success");
            response.put("message", "Post deleted successfully");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            response.put("status", "error");
            response.put("message", "Post not found or user does not own the post");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Failed to delete post");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
