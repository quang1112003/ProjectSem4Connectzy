package fpt.edu.vn.backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatNotification {
    private Integer id;
    private String senderId;
    private String recipientId;
    private String content;
}
