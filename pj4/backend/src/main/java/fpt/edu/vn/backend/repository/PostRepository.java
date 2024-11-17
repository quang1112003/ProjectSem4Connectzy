package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.Post;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer> {

    @Query("SELECT DISTINCT p FROM Post p LEFT JOIN FETCH p.photos WHERE p.user.id = :userId ORDER BY p.createdAt DESC")
    List<Post> findAllByUserIdWithPhotos(@Param("userId") Integer userId);

    Optional<Post> findByIdAndUserId(Integer id, Integer userId);

    @Query("SELECT p FROM Post p " +
            "WHERE p.user.id IN (" +
            "    SELECT CASE " +
            "           WHEN f.user.id = :currentUserId THEN f.friend.id " +
            "           ELSE f.user.id " +
            "           END " +
            "    FROM Friendship f " +
            "    WHERE (f.user.id = :currentUserId OR f.friend.id = :currentUserId) " +
            "    AND f.status = 'ACCEPTED'" +
            ") " +
            "AND (p.visibility = 'PUBLIC' " +
            "     OR (p.visibility = 'FRIENDS' AND EXISTS (" +
            "         SELECT 1 FROM Friendship f " +
            "         WHERE ((f.user.id = p.user.id AND f.friend.id = :currentUserId) " +
            "                OR (f.friend.id = p.user.id AND f.user.id = :currentUserId)) " +
            "         AND f.status = 'ACCEPTED'" +
            "     )) " +
            "     OR (p.visibility = 'PRIVATE' AND p.user.id = :currentUserId)) " +
            "ORDER BY p.createdAt DESC")
    List<Post> findPostsByFriends(@Param("currentUserId") int currentUserId);
}

