package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.dto.FriendshipParams;
import fpt.edu.vn.backend.entity.Friendship;
import fpt.edu.vn.backend.entity.FriendshipStatus;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FriendshipRepository extends JpaRepository<Friendship, Integer> {

    Optional<Friendship> findByUserIdAndFriendId(Integer userId, Integer friendId);

    @Query("SELECT CASE WHEN COUNT(f) > 0 THEN true ELSE false END " +
            "FROM Friendship f " +
            "WHERE ((f.user.id = :userId AND f.friend.id = :currentUserId) " +
            "   OR (f.user.id = :currentUserId AND f.friend.id = :userId)) " +
            "   AND f.status = 'ACCEPTED'")
    boolean isFriend(@Param("userId") int userId, @Param("currentUserId") int currentUserId);

    @Query("SELECT f FROM Friendship f " +
            "WHERE (f.user.id = :userId AND f.friend.id = :friendId) " +
            "OR (f.user.id = :friendId AND f.friend.id = :userId)")
    Optional<Friendship> findBidirectionalFriendship(@Param("userId") Integer userId,
                                                     @Param("friendId") Integer friendId);

    @Query("SELECT f FROM Friendship f " +
            "WHERE (f.user.id = :userId OR f.friend.id = :userId) " +
            "AND (:predicate IS NULL OR f.status = :predicate)")
    List<Friendship> findFriendships(@Param("userId") Integer userId,
                                     @Param("predicate") FriendshipStatus predicate);

    @Query("SELECT COUNT(f) FROM Friendship f WHERE (f.user.id = :userId OR f.friend.id = :userId) AND f.status = 'ACCEPTED'")
    Long countFriendsByUserId(@Param("userId") Integer userId);
    @Modifying
    @Transactional
    @Query("DELETE FROM Friendship f WHERE (f.user.knowAs = :userKnowAs AND f.friend.knowAs = :friendKnowAs) OR (f.user.knowAs = :friendKnowAs AND f.friend.knowAs = :userKnowAs)")
    void deleteByUserAndFriend(@Param("userKnowAs") String userKnowAs, @Param("friendKnowAs") String friendKnowAs);
}
