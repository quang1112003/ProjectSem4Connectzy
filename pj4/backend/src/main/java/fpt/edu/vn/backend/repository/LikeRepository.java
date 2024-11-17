package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.Like;
import fpt.edu.vn.backend.entity.Post;
import fpt.edu.vn.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer> {
    // Kiểm tra xem người dùng đã "like" bài viết hay chưa
    boolean existsByUserAndPost(User user, Post post);

    // Tìm "like" của một người dùng đối với một bài viết
    Optional<Like> findByUserAndPost(User user, Post post);

    List<Like> findByPostId(Integer postId);

    List<Like> findByUserId(Integer userId);

    long countByPostId(Integer postId);
}