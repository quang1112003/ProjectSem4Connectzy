package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.Country;
import fpt.edu.vn.backend.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface StateRepository extends JpaRepository<State, Integer> {
    Optional<State> findByIso2AndCountryIso2(String stateIso, String countryIso);
    boolean existsByIso2AndCountry(String iso2, Country country);
    List<State> findByCountry(Country country);
}
