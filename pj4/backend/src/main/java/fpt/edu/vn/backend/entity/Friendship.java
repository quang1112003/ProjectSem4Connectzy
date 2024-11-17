package fpt.edu.vn.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@Table(name = "friendship")
public class Friendship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // Người gửi lời mời kết bạn

    @ManyToOne
    @JoinColumn(name = "friend_id", nullable = false)
    private User friend; // Người nhận lời mời kết bạn

    @Enumerated(EnumType.STRING)
    private FriendshipStatus status; // Trạng thái của mối quan hệ (PENDING, ACCEPTED, REJECTED, UNFRIENDED)

    private LocalDateTime createdAt; // Thời gian tạo mối quan hệ

    private Boolean initiator;

    public Friendship() {
        this.createdAt = LocalDateTime.now();
    }

}
