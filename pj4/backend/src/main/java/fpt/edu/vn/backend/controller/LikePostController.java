package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.LikeDto;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.impl.LikePostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/v1/like")
@RequiredArgsConstructor
@Slf4j
public class LikePostController {
    private final LikePostService likePostService;

    @PostMapping("/toggle")
    public ResponseEntity<?> toggleLike(@AuthenticationPrincipal User currentUser, @RequestParam Integer postId) {
        try {
            // Gọi phương thức toggleLike từ service
            likePostService.toggleLike(currentUser.getId(), postId);
            return ResponseEntity.ok(new HashMap<String, String>(){{
                put("message", "Like successfully!!!");
            }});
        } catch (RuntimeException ex) {
            // Log lỗi và trả về phản hồi lỗi nếu không tìm thấy người dùng hoặc bài viết
            log.error("Error toggling like: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        } catch (Exception ex) {
            // Log các lỗi khác và trả về lỗi tổng quát
            log.error("Unexpected error: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred");
        }
    }

    @GetMapping("/liked-posts")
    public ResponseEntity<List<?>> getLikedPosts(@AuthenticationPrincipal User currentUser) {
        try {
            List<Integer> likedPostIds = likePostService.getLikedPostIdsByUser(currentUser.getId());
            return ResponseEntity.ok(likedPostIds);
        }
        catch (RuntimeException ex) {
            log.error("Error getting liked posts: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    @GetMapping("/count")
    public ResponseEntity<?> getLikeCount(@RequestParam Integer postId) {
        try{
            long count = likePostService.getLikeCountForPost(postId);
            return ResponseEntity.ok(count);
        }
        catch (RuntimeException ex) {
            log.error("Error fetching like: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }

    @GetMapping("/users/{postId}")
    public ResponseEntity<List<LikeDto>> getUsersWhoLikedPost(@PathVariable Integer postId) {
        try {
            // Gọi phương thức service để lấy danh sách người dùng thích bài viết
            List<LikeDto> likeDtos = likePostService.getUsersWhoLikedPost(postId);
            return ResponseEntity.ok(likeDtos);
        } catch (RuntimeException ex) {
            // Xử lý lỗi khi không tìm thấy bài viết
            log.error("Error fetching users who liked post: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.emptyList());
        } catch (Exception ex) {
            // Xử lý lỗi tổng quát
            log.error("Unexpected error: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.emptyList());
        }
    }


}
