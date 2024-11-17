package fpt.edu.vn.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "likes")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;  // Người dùng "like"

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;  // Bài viết được "like"

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();  // Thời gian "like"

}
