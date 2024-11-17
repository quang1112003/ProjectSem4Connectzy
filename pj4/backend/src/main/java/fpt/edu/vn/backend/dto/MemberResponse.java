package fpt.edu.vn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponse {
    public Integer id;
    public String firstName;
    public String lastName;
    public String email;
    public LocalDateTime dateCreated;
    public LocalDateTime lastActive;
    public Integer age;
    public String photoUrl;
    public String knowAs;
    public String gender;
    public String introduction;
    public List<InterestDto> interests;
    public String lookingFor;
    private String countryName;
    private String stateName;
    private String cityName;
    private Integer countryId;
    private Integer stateId;
    private Integer cityId;
    public boolean isProfilePrivate ;
    public List<PhotoResponse> photos;
    private List<BasicMemberResponse> likedUsers; // Danh sách người dùng đã thích
    private List<BasicMemberResponse> likedByUsers; // Danh sách người dùng thích người này
}
