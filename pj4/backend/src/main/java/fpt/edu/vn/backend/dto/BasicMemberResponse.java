package fpt.edu.vn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BasicMemberResponse {
    public Integer id;
    public String firstName;
    public String lastName;
    public String knowAs;
    public String email;
    public String photoUrl;
    public boolean isPrivate;
}
