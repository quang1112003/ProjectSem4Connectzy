package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.FriendshipDto;
import fpt.edu.vn.backend.entity.Friendship;
import fpt.edu.vn.backend.entity.FriendshipStatus;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.repository.FriendshipRepository;
import fpt.edu.vn.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class FriendshipService {
    private final FriendshipRepository friendshipRepository;
    private final UserRepository userRepository;

    public FriendshipDto getFriendshipStatus(Integer userId, Integer friendId) {
        Optional<Friendship> friendship = friendshipRepository.findBidirectionalFriendship(userId, friendId);
        return friendship.map(f -> convertToDto(f, userId)).orElse(null);
    }

    public List<FriendshipDto> getFriendships(Integer userId, FriendshipStatus predicate) {
        if (userId == null) {
            throw new IllegalArgumentException("User ID không được để trống");
        }

        List<Friendship> friendships = friendshipRepository.findFriendships(userId, predicate);
        return friendships.stream()
                .map(friendship -> convertToDto(friendship, userId))
                .collect(Collectors.toList());
    }

    public FriendshipDto toggleFriendRequest(Integer userId, Integer friendId) {
        if (userId.equals(friendId)) {
            throw new IllegalArgumentException("Cannot send a friend request to yourself.");
        }

        Optional<Friendship> friendshipOpt = friendshipRepository.findBidirectionalFriendship(userId, friendId);

        if (friendshipOpt.isPresent()) {
            Friendship friendship = friendshipOpt.get();
            if (friendship.getUser().getId().equals(userId)) {
                updateFriendshipStatusForSender(friendship);
            } else {
                updateFriendshipStatusForReceiver(friendship);
            }
            friendshipRepository.save(friendship);
            return convertToDto(friendship, userId);
        } else {
            return createNewFriendRequest(userId, friendId);
        }
    }

    // Chấp nhận yêu cầu kết bạn
    public FriendshipDto acceptFriendRequest(Integer userId, Integer friendId) {
        Friendship friendship = friendshipRepository.findByUserIdAndFriendId(friendId, userId)
                .orElseThrow(() -> new EntityNotFoundException("Friend request not found"));

        friendship.setStatus(FriendshipStatus.ACCEPTED);
        friendshipRepository.save(friendship);
        return convertToDto(friendship, userId);
    }

    public FriendshipDto rejectFriendRequest(Integer userId, Integer friendId) {
        Optional<Friendship> friendshipOpt = friendshipRepository.findBidirectionalFriendship(userId, friendId);

        if (friendshipOpt.isEmpty()) {
            throw new EntityNotFoundException("Friend request not found");
        }

        Friendship friendship = friendshipOpt.get();
        friendshipRepository.delete(friendship);
        // Trả về DTO để gửi thông báo WebSocket
        return convertToDto(friendship, userId);
    }

    public FriendshipDto cancelFriendRequest(Integer userId, Integer friendId) {
        Optional<Friendship> friendshipOpt = friendshipRepository.findBidirectionalFriendship(userId, friendId);

        if (friendshipOpt.isPresent()) {
            Friendship friendship = friendshipOpt.get();
            friendshipRepository.delete(friendship);
            return convertToDto(friendship, userId);
        } else {
            throw new EntityNotFoundException("Friendship not found");
        }
    }

    private FriendshipDto convertToDto(Friendship friendship, Integer currentUserId) {
        FriendshipDto friendshipDto = new FriendshipDto();
        friendshipDto.setId(friendship.getId());
        friendshipDto.setStatus(friendship.getStatus());
        friendshipDto.setCreatedAt(friendship.getCreatedAt());
        friendshipDto.setUserId(friendship.getUser().getId());
        friendshipDto.setFriendId(friendship.getFriend().getId());

        // Xác định "otherUser" là bạn dựa vào currentUserId và initiator
        User otherUser;
        if (friendship.getUser().getId().equals(currentUserId)) {
            otherUser = friendship.getFriend();
        } else {
            otherUser = friendship.getUser();
        }

        friendshipDto.setOtherUserKnowAs(otherUser.getKnowAs());
        friendshipDto.setOtherUserEmail(otherUser.getEmail());
        String photoUrl = otherUser.getPhotos().stream()
                .filter(Photo::isMain)
                .findFirst()
                .map(Photo::getUrl)
                .orElse(null);
        friendshipDto.setOtherUserPhotoUrl(photoUrl);

        return friendshipDto;
    }

    private void updateFriendshipStatusForSender(Friendship friendship) {
        switch (friendship.getStatus()) {
            case PENDING, ACCEPTED:
                friendship.setStatus(FriendshipStatus.UNFRIENDED);
                break;
            case UNFRIENDED:
            case REJECTED:
                friendship.setStatus(FriendshipStatus.PENDING);
                break;
        }
    }

    private void updateFriendshipStatusForReceiver(Friendship friendship) {
        switch (friendship.getStatus()) {
            case PENDING:
                friendship.setStatus(FriendshipStatus.ACCEPTED);
                break;
            case ACCEPTED:
                friendship.setStatus(FriendshipStatus.UNFRIENDED);
                break;
            case UNFRIENDED:
            case REJECTED:
                friendshipRepository.delete(friendship);
                break;
        }
    }

    private FriendshipDto createNewFriendRequest(Integer userId, Integer friendId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        User friend = userRepository.findById(friendId)
                .orElseThrow(() -> new EntityNotFoundException("Friend not found"));

        Friendship newFriendship = new Friendship();
        newFriendship.setUser(user);
        newFriendship.setFriend(friend);
        newFriendship.setStatus(FriendshipStatus.PENDING);
        newFriendship.setCreatedAt(LocalDateTime.now());
        newFriendship.setInitiator(true);

        friendshipRepository.save(newFriendship);
        return convertToDto(newFriendship, userId);
    }

    public Long getFriendsCount(Integer userId) {
        return friendshipRepository.countFriendsByUserId(userId);
    }

    // Trong lớp FriendshipService
    public void deleteFriend(String userKnowAs, String friendKnowAs) {
        // Thực hiện kiểm tra và xóa bạn bè trong cơ sở dữ liệu
        friendshipRepository.deleteByUserAndFriend(userKnowAs, friendKnowAs);
    }

}
