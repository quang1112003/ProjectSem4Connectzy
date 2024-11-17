package fpt.edu.vn.backend.helpers;

import fpt.edu.vn.backend.dto.*;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.Post;
import fpt.edu.vn.backend.entity.User;

import java.time.LocalDate;
import java.time.Period;
import java.util.stream.Collectors;

public class UserMapper {
    public static MemberResponse toMemberResponse(User user, User requestingUser, boolean isFriend) {
        MemberResponse memberResponse = new MemberResponse();

        memberResponse.setId(user.getId());
        memberResponse.setFirstName(user.getFirstName());
        memberResponse.setLastName(user.getLastName());
        memberResponse.setKnowAs(user.getKnowAs());
        memberResponse.setEmail(user.getUsername());
        memberResponse.setDateCreated(user.getDateCreated());
        memberResponse.setLastActive(user.getLastActive());
        memberResponse.setGender(user.getGender());
        memberResponse.setIntroduction(user.getIntroduction());
        memberResponse.setLookingFor(user.getLookingFor());
        memberResponse.setProfilePrivate(user.isPrivate());

        memberResponse.setInterests(
                user.getInterests().stream()
                        .map(interest -> new InterestDto(interest.getId(), interest.getName()))
                        .collect(Collectors.toList())
        );

        if (user.getDateOfBirth() != null) {
            int age = Period.between(user.getDateOfBirth(), LocalDate.now()).getYears();
            memberResponse.setAge(age);
        }

        // Lấy URL ảnh chính (nếu có) của người dùng
        String photoUrl = user.getPhotos().stream()
                .filter(Photo::isMain)
                .findFirst()
                .map(Photo::getUrl)
                .orElse(null);
        memberResponse.setPhotoUrl(photoUrl);

        // Lọc ảnh để chỉ hiển thị những ảnh được phép cho người dùng yêu cầu
        memberResponse.setPhotos(user.getPhotos().stream()
                .filter(photo -> isPhotoVisible(photo, requestingUser, isFriend))
                .map(photo -> new PhotoResponse(photo.getId(), photo.getUrl(), photo.isMain()))
                .collect(Collectors.toList()));

        // Set Country, State, and City names
        if (user.getCountry() != null) {
            memberResponse.setCountryName(user.getCountry().getName());
            memberResponse.setCountryId(user.getCountry().getId());
        }
        if (user.getState() != null) {
            memberResponse.setStateName(user.getState().getName());
            memberResponse.setStateId(user.getState().getId());
        }
        if (user.getCity() != null) {
            memberResponse.setCityName(user.getCity().getName());
            memberResponse.setCityId(user.getCity().getId());
        }

        return memberResponse;
    }

    private static boolean isPhotoVisible(Photo photo, User requestingUser, boolean isFriend) {
        Post post = photo.getPost();
        if (post == null) {
            return true; // Trường hợp ảnh không gắn với bài viết nào
        }

        // Kiểm tra nếu người dùng hiện tại là chủ sở hữu ảnh (không cần kiểm tra điều kiện bạn bè)
        if (post.getUser().equals(requestingUser)) {
            return true; // Trả về tất cả ảnh nếu là người dùng hiện tại
        }

        // Kiểm tra quyền truy cập theo trạng thái bài viết
        return switch (post.getVisibility()) {
            case PUBLIC -> true;
            case FRIENDS -> isFriend;
            case PRIVATE -> false; // Chỉ chủ sở hữu mới có thể xem
            default -> false;
        };
    }


    public static MemberResponse toMemberResponseBasic(User user) {
        MemberResponse memberResponse = new MemberResponse();

        memberResponse.setId(user.getId());
        memberResponse.setFirstName(user.getFirstName());
        memberResponse.setLastName(user.getLastName());
        memberResponse.setKnowAs(user.getKnowAs());
        memberResponse.setEmail(user.getEmail());
        memberResponse.setProfilePrivate(user.isPrivate());

        String photoUrl = user.getPhotos().stream()
                .filter(Photo::isMain)
                .findFirst()
                .map(Photo::getUrl)
                .orElse(null);
        memberResponse.setPhotoUrl(photoUrl);

        return memberResponse;
    }

}
