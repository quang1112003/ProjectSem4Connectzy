package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.FollowRequestDto;
import fpt.edu.vn.backend.entity.FollowRequest;
import fpt.edu.vn.backend.entity.FollowRequestStatus;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.repository.FollowRequestRepository;
import fpt.edu.vn.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FollowService {
    private final FollowRequestRepository followRequestRepository;
    private final UserRepository userRepository;

    // Lấy danh sách yêu cầu theo dõi đang chờ (trả về DTO)
    public List<FollowRequestDto> getPendingFollowRequests(Integer receiverId) {
        User receiver = userRepository.findById(receiverId)
                .orElseThrow(() -> new EntityNotFoundException("Receiver not found."));

        // Lấy các yêu cầu theo dõi có trạng thái PENDING
        List<FollowRequest> pendingRequests = followRequestRepository.findByReceiverAndStatus(receiver, FollowRequestStatus.PENDING);

        // Chuyển đổi FollowRequest thành FollowRequestDto
        return pendingRequests.stream()
                .map(request -> new FollowRequestDto(
                        request.getId(),
                        request.getSender().getId(),
                        request.getSender().getUsername(),
                        request.getSender().getKnowAs(),
                        request.getStatus()
                ))
                .collect(Collectors.toList());
    }

    // Gửi yêu cầu theo dõi
    public String sendFollowRequest(Integer senderId, Integer receiverId) {
        // Không cho phép người dùng tự gửi yêu cầu theo dõi chính mình
        if (senderId.equals(receiverId)) {
            throw new IllegalStateException("You cannot follow yourself.");
        }

        User sender = userRepository.findById(senderId).orElseThrow(() -> new EntityNotFoundException("Sender not found."));
        User receiver = userRepository.findById(receiverId).orElseThrow(() -> new EntityNotFoundException("Receiver not found."));

        // Kiểm tra xem đã có yêu cầu theo dõi từ user này chưa
        Optional<FollowRequest> existingRequest = followRequestRepository.findBySenderAndReceiver(sender, receiver);
        if (existingRequest.isPresent()) {
            return "Follow request already sent.";
        }

        FollowRequest followRequest = new FollowRequest();
        followRequest.setSender(sender);
        followRequest.setReceiver(receiver);
        followRequest.setStatus(FollowRequestStatus.PENDING);
        followRequestRepository.save(followRequest);

        return "Follow request sent.";
    }


    // Chấp nhận hoặc từ chối yêu cầu theo dõi
    public String respondToFollowRequest(Integer requestId, boolean accept, Integer currentUserId) {
        FollowRequest request = followRequestRepository.findById(requestId)
                .orElseThrow(() -> new EntityNotFoundException("Follow request not found."));

        // Chỉ người nhận yêu cầu theo dõi mới được chấp nhận hoặc từ chối
        if (!request.getReceiver().getId().equals(currentUserId)) {
            throw new IllegalStateException("You are not authorized to respond to this follow request.");
        }

        if (accept) {
            request.setStatus(FollowRequestStatus.ACCEPTED);
            // Sau khi chấp nhận, thêm người gửi vào danh sách followed của người nhận
            User sender = request.getSender();
            User receiver = request.getReceiver();
            receiver.getLikedUsers().add(sender);
            userRepository.save(receiver);
            return "Follow request accepted.";
        } else {
            request.setStatus(FollowRequestStatus.REJECTED);
            return "Follow request rejected.";
        }
    }

    public boolean isUserFollowing(Integer currentUserId, Integer targetUserId) {
        return followRequestRepository.existsBySender_IdAndReceiver_Id(currentUserId, targetUserId);
    }

}
