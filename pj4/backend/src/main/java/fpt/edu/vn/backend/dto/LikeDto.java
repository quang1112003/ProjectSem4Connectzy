package fpt.edu.vn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class LikeDto {
    private Integer id;

    private Integer userId;

    private String userKnowAs;

    private String userEmail;

    private String photoUrl;

    private Integer postId;

    private String postContent;

    private LocalDateTime createdAt;

}
