package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {
    List<Photo> findByUser (User user); // Change to return a List<Photo>
    boolean existsByUserAndIsMainTrue(User user);
    Photo findByUserAndIsMainTrue(User user);
}
