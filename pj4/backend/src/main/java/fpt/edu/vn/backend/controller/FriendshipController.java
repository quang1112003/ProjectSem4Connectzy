package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.dto.FriendshipDto;
import fpt.edu.vn.backend.entity.FriendshipStatus;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.service.impl.FriendshipService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/v1/friendships")
@RequiredArgsConstructor
@Slf4j
public class FriendshipController {
    private final FriendshipService friendshipService;
    private final SimpMessagingTemplate messagingTemplate;

    @GetMapping("/count/{userId}")
    public ResponseEntity<?> getFriendsCount(@PathVariable Integer userId) {
        try {
            Long count = friendshipService.getFriendsCount(userId);
            return ResponseEntity.ok(count);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while fetching the friends count: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<FriendshipDto>> getFriendships(
            @AuthenticationPrincipal User currentUser,
            @RequestParam FriendshipStatus predicate) {

        try {
            Integer userId = currentUser.getId();
            List<FriendshipDto> friendships = friendshipService.getFriendships(userId, predicate);
            return ResponseEntity.ok(friendships);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(null);
        }
    }

    // Gửi kết bạn, hủy kb
    @PostMapping("/toggle/{friendId}")
    public ResponseEntity<?> toggleFriendRequest(@AuthenticationPrincipal User currentUser, @PathVariable Integer friendId) {
        try {
            FriendshipDto updatedFriendship = friendshipService.toggleFriendRequest(currentUser.getId(), friendId);
            messagingTemplate.convertAndSendToUser(friendId.toString(), "/queue/friendRequest", updatedFriendship);
            return ResponseEntity.ok(updatedFriendship);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body("Failed to toggle friend request");
        }
    }

    // Lấy trạng thái kết bạn giữa người dùng hiện tại và một người bạn khác
    @GetMapping("/status/{friendId}")
    public ResponseEntity<?> getFriendshipStatus(@AuthenticationPrincipal User currentUser, @PathVariable Integer friendId) {
        try {
            FriendshipDto friendship = friendshipService.getFriendshipStatus(currentUser.getId(), friendId);
            return ResponseEntity.ok(friendship);
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body("Failed to get friendship status");
        }
    }

    // Chấp nhận yêu cầu kết bạn
    @PostMapping("/accept/{friendId}")
    public ResponseEntity<?> acceptFriendRequest(@AuthenticationPrincipal User currentUser, @PathVariable Integer friendId) {
        try {
            FriendshipDto acceptedFriendship = friendshipService.acceptFriendRequest(currentUser.getId(), friendId);
            messagingTemplate.convertAndSendToUser(friendId.toString(), "/queue/friendAccept", acceptedFriendship);
            messagingTemplate.convertAndSendToUser(currentUser.getId().toString(), "/queue/friendAccept", acceptedFriendship);
            return ResponseEntity.ok(acceptedFriendship);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body("Failed to accept friend request");
        }
    }

    @PostMapping("/reject/{friendId}")
    public ResponseEntity<?> rejectFriendRequest(@AuthenticationPrincipal User currentUser, @PathVariable Integer friendId) {
        try {
            FriendshipDto friendshipDto = friendshipService.rejectFriendRequest(currentUser.getId(), friendId);
            return ResponseEntity.ok(friendshipDto);
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body("Failed to reject friend request");
        }
    }

    @DeleteMapping("/cancelFriendRequest")
    public ResponseEntity<?> cancelFriendRequest(@AuthenticationPrincipal User currentUser, @RequestParam Integer friendId) {
        try {
            FriendshipDto friendshipDto = friendshipService.cancelFriendRequest(currentUser.getId(), friendId);
            return ResponseEntity.ok(friendshipDto);
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body("Failed to cancel friend request");
        }
    }

    // Xóa bạn bè
    @DeleteMapping("/delete/{friendKnowAs}")
    public ResponseEntity<?> deleteFriend(@AuthenticationPrincipal User currentUser, @PathVariable String friendKnowAs) {
        try {
            friendshipService.deleteFriend(currentUser.getKnowAs(), friendKnowAs);
            return ResponseEntity.ok("Friend deleted successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).body("Failed to delete friend");
        }
    }

}
