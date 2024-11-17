package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.PhotoResponse;
import fpt.edu.vn.backend.dto.PostRequest;
import fpt.edu.vn.backend.dto.PostResponse;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.Post;
import fpt.edu.vn.backend.entity.PostVisibility;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.helpers.PostMapper;
import fpt.edu.vn.backend.repository.FriendshipRepository;
import fpt.edu.vn.backend.repository.PhotoRepository;
import fpt.edu.vn.backend.repository.PostRepository;
import fpt.edu.vn.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final UploadFileImageImpl uploadFileImage; // Tận dụng service upload ảnh có sẵn
    private final PhotoRepository photoRepository;
    private final PostMapper postMapper;
    private final FriendshipRepository friendshipRepository;

    /* ADMIN */

    public List<PostResponse> getAllPostsByUserId(int userId) {
        List<Post> posts = postRepository.findAllByUserIdWithPhotos(userId);
        if (posts.isEmpty()) {
            throw new RuntimeException("No posts found for this user.");
        }
        return posts.stream().map(postMapper::toDto).collect(Collectors.toList());
    }

    public void deletePostByAdmin(int postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        // Xóa tất cả các ảnh liên kết với bài viết trước khi xóa bài viết
        for (Photo photo : post.getPhotos()) {
            try {
                uploadFileImage.deletePhotoForAdmin(photo.getId());
            } catch (IOException e) {
                throw new RuntimeException("Failed to delete photo with ID: " + photo.getId(), e);
            }
        }

        postRepository.delete(post);
    }

    // END ADMIN

    public List<PostResponse> getPostsByFriends(int currentUserId) {
        var posts = postRepository.findPostsByFriends(currentUserId);
        return posts.stream().map(postMapper::toDto).collect(Collectors.toList());
    }

    public List<PostResponse> getPostsByUserId(int userId, int currentUserId) {
        List<Post> posts = postRepository.findAllByUserIdWithPhotos(userId).stream()
                .filter(post -> {
                    if (post.getVisibility() == PostVisibility.PUBLIC) {
                        return true; // Mọi người đều có thể xem
                    } else if (post.getVisibility() == PostVisibility.FRIENDS) {
                        // Nếu bài viết là của người dùng hiện tại, thì người dùng có thể xem
                        return post.getUser().getId() == currentUserId || isFriend(userId, currentUserId);
                    } else if (post.getVisibility() == PostVisibility.PRIVATE) {
                        return post.getUser().getId() == currentUserId || userId == currentUserId; // Chủ bài viết có thể xem bài viết của mình
                    }
                    return false; // Không có trạng thái nào hợp lệ
                })
                .toList();

        if (posts.isEmpty()) {
            throw new RuntimeException("No posts found for this user.");
        }

        return posts.stream().map(postMapper::toDto).collect(Collectors.toList());
    }


    public boolean isFriend(int userId, int currentUserId) {
        return friendshipRepository.isFriend(userId, currentUserId);
    }

    /**
     * Tạo bài viết mới cho một người dùng với các ảnh đính kèm (nếu có).
     * @param userId ID người dùng.
     * @param postRequest Dữ liệu bài viết mới.
     * @param files Danh sách các file ảnh.
     * @return PostResponse chứa thông tin bài viết vừa tạo.
     */
    public void createPost(int userId, PostRequest postRequest, List<MultipartFile> files) throws IOException {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        // Tạo đối tượng Post từ yêu cầu
        Post post = Post.builder()
                .content(postRequest.getContent())
                .user(user)
                .visibility(postRequest.getVisibility())
                .createdAt(LocalDateTime.now())
                .build();

        // Lưu bài viết trước khi xử lý ảnh
        post = postRepository.save(post);

        // Xử lý và thêm các ảnh nếu có
        if (files != null) {
            for (MultipartFile file : files) {
                PhotoResponse photoResponse = uploadFileImage.uploadImage(file, userId);
                Photo photo = photoRepository.findById(photoResponse.getId()).orElseThrow(() -> new RuntimeException("Photo not found"));
                photo.setPost(post); // Liên kết ảnh với bài viết
                photoRepository.save(photo);
            }
        }
    }

    /**
     * Sửa bài viết dựa trên ID của bài viết và ID của người dùng.
     * @param postId ID bài viết cần sửa.
     * @param userId ID người dùng.
     * @param postRequest Dữ liệu mới của bài viết.
     * @return PostResponse chứa thông tin bài viết sau khi cập nhật.
     */
    public PostResponse updatePost(int postId, int userId, PostRequest postRequest) {
        Post post = postRepository.findByIdAndUserId(postId, userId)
                .orElseThrow(() -> new RuntimeException("Unauthorized access or Post not found"));

        post.setContent(postRequest.getContent());
        post.setVisibility(postRequest.getVisibility());
        post.setUpdatedAt(LocalDateTime.now());

        postRepository.save(post);

        return postMapper.toDto(post);
    }

    /**
     * Thêm ảnh vào một bài viết đã tồn tại.
     * @param postId ID của bài viết.
     * @param userId ID người dùng (để xác thực quyền sở hữu).
     * @param files Danh sách các file ảnh.
     * @return PostResponse chứa thông tin bài viết sau khi thêm ảnh.
     */
    public PostResponse addPhotosToPost(int postId, int userId, List<MultipartFile> files) throws IOException {
        Post post = postRepository.findByIdAndUserId(postId, userId)
                .orElseThrow(() -> new RuntimeException("Post not found or user does not own the post"));

        // Thêm từng ảnh vào bài viết
        for (MultipartFile file : files) {
            PhotoResponse photoResponse = uploadFileImage.uploadImage(file, userId);
            Photo photo = photoRepository.findById(photoResponse.getId()).orElseThrow(() -> new RuntimeException("Photo not found"));
            photo.setPost(post); // Liên kết ảnh với bài viết
            photoRepository.save(photo);
        }

        return postMapper.toDto(post);
    }

    /**
     * Xóa ảnh khỏi bài viết.
     * @param postId ID của bài viết.
     * @param photoId ID của ảnh cần xóa.
     * @param userId ID người dùng (để xác thực quyền sở hữu).
     */
    public void removePhotoFromPost(int postId, int photoId, int userId) {
        Post post = postRepository.findByIdAndUserId(postId, userId)
                .orElseThrow(() -> new RuntimeException("Post not found or user does not own the post"));

        Photo photo = photoRepository.findById(photoId)
                .orElseThrow(() -> new RuntimeException("Photo not found"));

        // Kiểm tra ảnh có thuộc bài viết không
        if (!photo.getPost().equals(post)) {
            throw new RuntimeException("Photo does not belong to the post");
        }

        try {
            uploadFileImage.deletePhoto(photoId); // Sử dụng phương thức xóa ảnh có sẵn
        } catch (IOException e) {
            throw new RuntimeException("Failed to delete photo with ID: " + photoId, e);
        }
    }

    /**
     * Xóa bài viết dựa trên ID bài viết và ID người dùng.
     * @param postId ID bài viết.
     * @param userId ID người dùng.
     */
    public void deletePost(int postId, int userId) {
        Post post = postRepository.findByIdAndUserId(postId, userId)
                .orElseThrow(() -> new RuntimeException("Post not found or user does not own the post"));

        // Xóa tất cả các ảnh liên kết với bài viết trước khi xóa bài viết
        for (Photo photo : post.getPhotos()) {
            try {
                uploadFileImage.deletePhoto(photo.getId());
            } catch (IOException e) {
                throw new RuntimeException("Failed to delete photo with ID: " + photo.getId(), e);
            }
        }

        postRepository.delete(post);
    }


}
