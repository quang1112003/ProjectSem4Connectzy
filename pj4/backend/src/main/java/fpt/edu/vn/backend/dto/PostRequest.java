package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.PostVisibility;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostRequest {
    private String content;
    private PostVisibility visibility;
}
