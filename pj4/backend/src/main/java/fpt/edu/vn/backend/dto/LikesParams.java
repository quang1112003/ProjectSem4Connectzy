package fpt.edu.vn.backend.dto;

import lombok.Data;

@Data
public class LikesParams {
    private Integer userId;
    private String predicate; // Can be 'likesMe' or 'likedByMe'
}
