package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.FollowRequestStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FollowRequestDto {
    private Integer id; // ID của yêu cầu theo dõi
    private Integer senderId; // ID của người gửi
    private String senderUsername; // Username của người gửi
    private String senderKnownAs; // Biệt danh của người gửi
    private FollowRequestStatus status; // Trạng thái của yêu cầu

}
