package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.dto.CountryDto;
import fpt.edu.vn.backend.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CountryRepository extends JpaRepository<Country, Integer> {
    List<Country> findAll(); // Lấy tất cả Country
    Optional<Country> findByIso2(String iso2); // Tìm Country theo iso2 //
}
