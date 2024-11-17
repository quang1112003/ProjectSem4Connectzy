package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.FollowRequest;
import fpt.edu.vn.backend.entity.FollowRequestStatus;
import fpt.edu.vn.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FollowRequestRepository extends JpaRepository<FollowRequest, Integer> {
    // Kiểm tra xem đã có yêu cầu theo dõi từ user này chưa
    Optional<FollowRequest> findBySenderAndReceiver(User sender, User receiver);

    // Lấy tất cả yêu cầu theo dõi mà người dùng này nhận được (trạng thái PENDING)
    List<FollowRequest> findByReceiverAndStatus(User receiver, FollowRequestStatus status);

    boolean existsBySender_IdAndReceiver_Id(Integer senderId, Integer receiverId);

}
