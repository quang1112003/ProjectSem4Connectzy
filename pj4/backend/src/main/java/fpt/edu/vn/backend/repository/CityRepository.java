package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.City;
import fpt.edu.vn.backend.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
    List<City> findByStateId(Integer state_id);
    Optional<City> findByNameAndState(String name, State state);
    List<City> findByState(State state);
}
