package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.Interest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberUpdateDto {
    public String introduction;
    public List<Integer> interests;
    public String lookingFor;
    public boolean isPrivate;
    private Integer countryId;
    private Integer stateId;
    private Integer cityId;
}
