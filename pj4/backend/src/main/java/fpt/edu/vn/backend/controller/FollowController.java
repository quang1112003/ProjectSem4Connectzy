package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.FollowRequestDto;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.impl.FollowService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/follow")
@RequiredArgsConstructor
@Slf4j
public class FollowController {
    private final FollowService followService;

    // Lấy danh sách yêu cầu theo dõi đang chờ (trả về DTO)
    @GetMapping("/pending-requests")
    public ResponseEntity<List<FollowRequestDto>> getPendingFollowRequests(@AuthenticationPrincipal User currentUser) {
        try {
            // Lấy danh sách yêu cầu theo dõi dưới dạng DTO
            List<FollowRequestDto> pendingRequests = followService.getPendingFollowRequests(currentUser.getId());

            return ResponseEntity.ok(pendingRequests);
        } catch (EntityNotFoundException e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Receiver not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Gửi yêu cầu theo dõi
    @PostMapping("/request/{receiverId}")
    public ResponseEntity<Map<String, String>> sendFollowRequest(@PathVariable Integer receiverId, @AuthenticationPrincipal User currentUser) {
        Map<String, String> response = new HashMap<>();
        try {
            String message = followService.sendFollowRequest(currentUser.getId(), receiverId);
            response.put("message", message);
            return ResponseEntity.ok(response);
        } catch (EntityNotFoundException e) {
            response.put("error", "User not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalStateException e) {
            response.put("error", "Invalid operation: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // Xác nhận hoặc từ chối yêu cầu theo dõi
    @PostMapping("/request/respond/{requestId}")
    public ResponseEntity<Map<String, String>> respondToFollowRequest(@PathVariable Integer requestId, @RequestParam boolean accept, @AuthenticationPrincipal User currentUser) {
        Map<String, String> response = new HashMap<>();
        try {
            // Truyền currentUser để kiểm tra xem người dùng hiện tại có quyền xử lý yêu cầu không
            String message = followService.respondToFollowRequest(requestId, accept, currentUser.getId());
            response.put("message", message);
            return ResponseEntity.ok(response);
        } catch (EntityNotFoundException e) {
            response.put("error", "Follow request not found: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalStateException e) {
            response.put("error", "Invalid operation: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
