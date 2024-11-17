package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.FriendshipStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class FriendshipDto {
    private Integer id;
    private String otherUserKnowAs;
    private String otherUserPhotoUrl;
    private String otherUserEmail;
    private FriendshipStatus status;
    private LocalDateTime createdAt;
    private Integer userId;
        private Integer friendId;
}

