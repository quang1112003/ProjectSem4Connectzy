package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.LikeDto;
import fpt.edu.vn.backend.entity.Like;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.Post;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.repository.LikeRepository;
import fpt.edu.vn.backend.repository.PostRepository;
import fpt.edu.vn.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LikePostService {
    private final LikeRepository likeRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public void toggleLike(Integer userId, Integer postId) {
        // Lấy thông tin người dùng và bài viết
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        // Kiểm tra xem người dùng đã like bài viết chưa
        if (likeRepository.existsByUserAndPost(user, post)) {
            // Nếu đã "like", xóa "like"
            Like like = likeRepository.findByUserAndPost(user, post)
                    .orElseThrow(() -> new RuntimeException("Like not found"));
            likeRepository.delete(like);
        } else {
            // Nếu chưa "like", tạo mới "like"
            Like newLike = Like.builder()
                    .user(user)
                    .post(post)
                    .createdAt(LocalDateTime.now())
                    .build();
            likeRepository.save(newLike);
        }
    }

    public List<LikeDto> getUsersWhoLikedPost(Integer postId) {
        // Kiểm tra xem bài viết có tồn tại không
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        // Lấy tất cả người dùng đã thích bài viết
        List<Like> likes = likeRepository.findByPostId(postId);

        // Chuyển đổi các Like entity thành LikeDto

        return likes.stream()
                .map(like -> LikeDto.builder()
                        .id(like.getId())
                        .userId(like.getUser().getId())
                        .userKnowAs(like.getUser().getKnowAs())
                        .userEmail(like.getUser().getEmail())
                        .photoUrl(like.getUser().getPhotos().stream()
                                .filter(Photo::isMain)
                                .findFirst()
                                .map(Photo::getUrl)
                                .orElse(null))
                        .postId(like.getPost().getId())
                        .postContent(like.getPost().getContent())
                        .createdAt(like.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }

    public List<Integer> getLikedPostIdsByUser(Integer userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Like> likes = likeRepository.findByUserId(userId);
        return likes.stream()
                .map(like -> like.getPost().getId())
                .collect(Collectors.toList());
    }

    public long getLikeCountForPost(Integer postId) {
        return likeRepository.countByPostId(postId);
    }
}
