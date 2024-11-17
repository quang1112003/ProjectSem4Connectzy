package fpt.edu.vn.backend.controller;

import fpt.edu.vn.backend.entity.Message;
import fpt.edu.vn.backend.entity.Status;
import fpt.edu.vn.backend.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final MessageRepository messageRepository;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receiveMessage(@Payload Message message) {
        if (message.getSenderName() == null || message.getMessage() == null) {
            throw new IllegalArgumentException("Tin nhắn không hợp lệ!");
        }
        message.setDate(new Date().toString());
        message.setStatus(Status.MESSAGE);

        return messageRepository.save(message);
    }

    @MessageMapping("/private-message")
    public void recMessage(@Payload Message message) {
        if (message.getSenderName() == null || message.getReceiverName() == null) {
            throw new IllegalArgumentException("Tin nhắn riêng tư không hợp lệ!");
        }

        message.setDate(new Date().toString());

        // Kiểm tra nếu là cuộc gọi video
        if (message.getStatus() == Status.CALL) {
            // Kiểm tra xem roomId đã được thiết lập hay chưa
            if (message.getRoomId() == null) {
                throw new IllegalArgumentException("Room ID không được xác định cho cuộc gọi video!");
            }

            // Log để kiểm tra thông tin cuộc gọi video
            System.out.println("Cuộc gọi video từ " + message.getSenderName() + " đến " + message.getReceiverName()
                    + " với roomId: " + message.getRoomId());

            // Gửi thông báo cuộc gọi đến người nhận
            simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "/private", message);
        } else {
            // Lưu tin nhắn vào cơ sở dữ liệu
            message.setStatus(Status.MESSAGE);
            Message savedMessage = messageRepository.save(message);

            // Log để kiểm tra tin nhắn thường
            System.out.println("Tin nhắn từ " + savedMessage.getSenderName() + " đến " + savedMessage.getReceiverName());

            // Gửi tin nhắn thông thường
            simpMessagingTemplate.convertAndSendToUser(savedMessage.getReceiverName(), "/private", savedMessage);
        }
    }


    @MessageMapping("/join")
    public void handleUserJoin(@Payload Message message) {
        if (message.getSenderName() == null) {
            throw new IllegalArgumentException("Người dùng không hợp lệ!");
        }
        simpMessagingTemplate.convertAndSend("/chatroom/public", message);
    }

    @GetMapping("/messages/user/{username}")
    public List<Message> getUserMessages(@PathVariable String username) {
        var messages = messageRepository.findMessagesBySenderOrReceiver(username, username);
        return messages;
    }

    @GetMapping("/messages/user/last/{username}")
    public ResponseEntity<Message> getUserLastMessage(@PathVariable String username) {
        List<Message> messages = messageRepository.findLastMessageByUser(username);
        if (!messages.isEmpty()) {
            return ResponseEntity.ok(messages.get(0));
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    // Sửa tin nhắn qua WebSocket
    @MessageMapping("/edit-message")
    public void editMessage(@Payload Message message) {
        Optional<Message> optionalMessage = messageRepository.findById(message.getId());
        if (optionalMessage.isPresent()) {
            Message existingMessage = optionalMessage.get();
            existingMessage.setMessage(message.getMessage());
            existingMessage.setDate(new Date().toString());
            existingMessage.setEdited(true);
            messageRepository.save(existingMessage);

            // Phát tin nhắn đã sửa
            if (existingMessage.getReceiverName() != null) {
                simpMessagingTemplate.convertAndSendToUser(existingMessage.getSenderName(), "/private", existingMessage);
                simpMessagingTemplate.convertAndSendToUser(existingMessage.getReceiverName(), "/private", existingMessage);
            } else {
                simpMessagingTemplate.convertAndSend("/chatroom/public", existingMessage);
            }
        } else {
            throw new IllegalArgumentException("Tin nhắn không tồn tại!");
        }
    }


    // Xóa tin nhắn qua WebSocket
    @MessageMapping("/delete-message")
    public void deleteMessage(@Payload Integer messageId) {
        Optional<Message> optionalMessage = messageRepository.findById(messageId);
        if (optionalMessage.isPresent()) {
            Message existingMessage = optionalMessage.get();
            messageRepository.deleteById(messageId);

            if (existingMessage.getReceiverName() != null) {
                simpMessagingTemplate.convertAndSendToUser(existingMessage.getSenderName(), "/private", messageId);
                simpMessagingTemplate.convertAndSendToUser(existingMessage.getReceiverName(), "/private", messageId);
            } else {
                simpMessagingTemplate.convertAndSend("/chatroom/public", messageId);
            }
        } else {
            throw new IllegalArgumentException("Tin nhắn không tồn tại!");
        }
    }


    @PostMapping("/messages")
    public ResponseEntity<Message> createMessage(@RequestBody Message newMessage) {
        Message savedMessage = messageRepository.save(newMessage);
        return ResponseEntity.ok(savedMessage);
    }
}
