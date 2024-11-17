package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDto {
    private Integer id;
    private String knowAs;
    private String email;
    private Role role;
    private boolean accountLocked;
}
