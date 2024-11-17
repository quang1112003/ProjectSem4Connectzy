package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.PostVisibility;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostResponse {
    private Integer id;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private UserSummary user;
    private List<PhotoResponse> photos;
    private PostVisibility visibility;

    // Inner class để tóm tắt thông tin người dùng trong phản hồi bài viết
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserSummary {
        private Integer id;
        private String firstName;
        private String lastName;
        private String knowAs;
        private String photoUrl;
    }
}