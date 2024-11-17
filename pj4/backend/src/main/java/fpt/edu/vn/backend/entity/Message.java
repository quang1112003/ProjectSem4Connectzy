package fpt.edu.vn.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "messages")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "sender_name")
    private String senderName;

    @Column(name = "receiver_name")
    private String receiverName;

    @Column(name = "message_text")
    private String message;

    @Column(name = "Edited")
    private Boolean Edited;

    @Column(name = "message_date")
    private String date;

    @Column(name = "room_id")
    private String roomId;

    @Enumerated(EnumType.STRING)
    @Column(name = "message_status")
    private Status status;
}