package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Page<User> findAll(Pageable pageable);

    Optional<User> findByEmail(String email);

    Optional<User> findByKnowAs(String knowAs);

    User findUserByEmail(String email);

    boolean existsByEmail(String email);

    @Query("""
           SELECT u FROM User u\s
           WHERE u.id != :userId
           AND LOWER(u.knowAs) like concat('%', :knowAs, '%')\s
           AND (:gender IS NULL OR LOWER(u.gender) = :gender)
           AND (u.dateOfBirth BETWEEN :startDate AND :endDate)
           AND u.id NOT IN (
               SELECT f.friend.id FROM Friendship f\s
               WHERE f.user.id = :userId AND f.status = 'ACCEPTED'
           )
           AND u.id NOT IN (
               SELECT f.user.id FROM Friendship f\s
               WHERE f.friend.id = :userId AND f.status = 'ACCEPTED'
           )
           AND u.id NOT IN (
               SELECT f.user.id FROM Friendship f\s
               WHERE f.friend.id = :userId AND f.status = 'PENDING'
           )
          \s""")
    Page<User> findUsersByGenderAgeAndExcludeFriends(
            @Param("userId") Integer userId,
            @Param("knowAs") String knowAs,
            @Param("gender") String gender,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate,
            Pageable pageable
    );

    @Query("""
           SELECT u FROM User u\s
           WHERE u.id != :userId
           AND LOWER(u.knowAs) like concat('%', :knowAs, '%')\s
           AND (:gender IS NULL OR LOWER(u.gender) = :gender)
           AND u.id NOT IN (
               SELECT f.friend.id FROM Friendship f\s
               WHERE f.user.id = :userId AND f.status = 'ACCEPTED'
           )
           AND u.id NOT IN (
               SELECT f.user.id FROM Friendship f\s
               WHERE f.friend.id = :userId AND f.status = 'ACCEPTED'
           )
           AND u.id NOT IN (
               SELECT f.user.id FROM Friendship f\s
               WHERE f.friend.id = :userId AND f.status = 'PENDING'
           )
          \s""")
    Page<User> findUsersByGenderAndExcludeFriends(
            @Param("userId") Integer userId,
            @Param("knowAs") String knowAs,
            @Param("gender") String gender,
            Pageable pageable
    );

    // Kiểm tra xem người dùng có thích người dùng khác không
    @Query("SELECT CASE WHEN COUNT(ul) > 0 THEN true ELSE false END " +
            "FROM User u JOIN u.likedUsers ul " +
            "WHERE u.id = :currentUserId AND ul.id = :targetUserId")
    boolean hasUserLiked(@Param("currentUserId") Integer currentUserId,
                         @Param("targetUserId") Integer targetUserId);

    // Lấy danh sách ID của người dùng thích người dùng hiện tại
    @Query("SELECT u.id FROM User u JOIN u.likedUsers ul WHERE ul.id = :currentUserId")
    List<Integer> getUserIdsWhoLikeMe(@Param("currentUserId") Integer currentUserId);

    // Kiểm tra xem userId có theo dõi targetUserId hay không
    @Query("SELECT CASE WHEN COUNT(1) > 0 THEN true ELSE false END " +
            "FROM User u JOIN u.likedUsers ul " +
            "WHERE u.id = :userId AND ul.id = :targetUserId")
    boolean isUserFollowing(@Param("userId") Integer userId, @Param("targetUserId") Integer targetUserId);

    // Lấy tất cả người dùng mà một người dùng đã theo dõi
    @Query("SELECT u FROM User u JOIN u.likedUsers ul WHERE ul.id = :userId")
    List<User> getFollowedUsers(@Param("userId") Integer userId);

}