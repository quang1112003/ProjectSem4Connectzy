package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {

    @Query("SELECT m FROM Message m WHERE (m.senderName = :sender OR m.receiverName = :receiver) AND m.status = 'MESSAGE'")
    List<Message> findMessagesBySenderOrReceiver(@Param("sender") String senderName, @Param("receiver") String receiverName);

    @Query("SELECT m FROM Message m WHERE (m.senderName = :username OR m.receiverName = :username) ORDER BY m.date DESC")
    List<Message> findLastMessageByUser(@Param("username") String username);
}