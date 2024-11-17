package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.FriendshipStatus;
import lombok.Data;

@Data
public class FriendshipParams {
    private Integer userId;
    private FriendshipStatus predicate; // Can be 'pending'
    private Boolean includeAll = true;
}