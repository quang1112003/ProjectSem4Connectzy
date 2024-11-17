package fpt.edu.vn.backend.helpers;

import fpt.edu.vn.backend.dto.PhotoResponse;
import fpt.edu.vn.backend.dto.PostResponse;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.Post;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Component
public class PostMapper {
    public PostResponse toDto(Post post) {
        PostResponse response = new PostResponse();
        response.setId(post.getId());
        response.setContent(post.getContent());
        response.setCreatedAt(post.getCreatedAt());
        response.setUpdatedAt(post.getUpdatedAt());
        response.setVisibility(post.getVisibility());

        // Chuyển đổi User sang UserSummary
        PostResponse.UserSummary userSummary = new PostResponse.UserSummary();
        userSummary.setId(post.getUser().getId());
        userSummary.setFirstName(post.getUser().getFirstName());
        userSummary.setLastName(post.getUser().getLastName());
        userSummary.setKnowAs(post.getUser().getKnowAs());
        userSummary.setPhotoUrl(post.getUser().getPhotos().stream()
                .filter(Photo::isMain)
                .findFirst()
                .map(Photo::getUrl)
                .orElse(null));
        response.setUser(userSummary);

        // Chuyển đổi danh sách Photo sang PhotoResponse
        response.setPhotos(post.getPhotos() != null ? post.getPhotos().stream()
                .map(photo -> {
                    PhotoResponse photoResponse = new PhotoResponse();
                    photoResponse.setId(photo.getId());
                    photoResponse.setUrl(photo.getUrl());
                    photoResponse.setMain(photo.isMain());
                    return photoResponse;
                })
                .collect(Collectors.toList()) : new ArrayList<>());

        return response;
    }
}
