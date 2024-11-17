package fpt.edu.vn.backend.service.impl;

import fpt.edu.vn.backend.dto.*;
import fpt.edu.vn.backend.entity.*;
import fpt.edu.vn.backend.helpers.UserMapper;
import fpt.edu.vn.backend.repository.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.security.Principal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final FollowService followService;
    private final CountryRepository countryRepository;
    private final InterestRepository interestRepository;
    private final FriendshipRepository friendshipRepository;
    private final PhotoRepository photoRepository;

    private static final String API_COUNTRY_URL = "https://api.countrystatecity.in/v1/countries";
    private static final String API_STATE_URL = "https://api.countrystatecity.in/v1/countries/{countryIso}/states";
    private static final String API_CITY_URL = "https://api.countrystatecity.in/v1/countries/{countryIso}/states/{stateIso}/cities";
    private static final String API_KEY = "MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg==";

    @Autowired
    private StateRepository stateRepository;
    @Autowired
    private CityRepository cityRepository;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private ModelMapper modelMapper;

    public void lockAccount(Integer userId, User currentUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));

        if (user.getEmail().equals(currentUser.getEmail())) {
            throw new IllegalArgumentException("You cannot lock your own account.");
        }

        if (user.isAccountLocked()) {
            throw new IllegalStateException("User account is already locked.");
        }

        user.setAccountLocked(true);
        userRepository.save(user);
    }

    public void unlockAccount(Integer userId, User currentUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));

        if (user.getEmail().equals(currentUser.getEmail())) {
            throw new IllegalArgumentException("You cannot unlock your own account.");
        }

        if (!user.isAccountLocked()) {
            throw new IllegalStateException("User account is already unlocked.");
        }

        user.setAccountLocked(false);
        userRepository.save(user);
    }

    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    private HttpEntity<String> createHttpEntityWithHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-CSCAPI-KEY", API_KEY);
        return new HttpEntity<>(headers);
    }

    public List<CountryDto> fetchAndSaveCountries() {
        HttpEntity<String> entity = createHttpEntityWithHeaders();
        List<Country> countries = restTemplate.exchange(API_COUNTRY_URL, HttpMethod.GET, entity, new ParameterizedTypeReference<List<Country>>() {}).getBody();
        assert countries != null;
        List<Country> savedCountries = countryRepository.saveAll(countries);

        // Chuyển đổi sang DTO
        return savedCountries.stream()
                .map(country -> modelMapper.map(country, CountryDto.class))
                .collect(Collectors.toList());
    }

    public List<StateDto> fetchAndSaveStates(String countryIso) {
        HttpEntity<String> entity = createHttpEntityWithHeaders();

        Country country = countryRepository.findByIso2(countryIso)
                .orElseThrow(() -> new RuntimeException("Country not found for ISO2: " + countryIso));

        List<State> existingStates = stateRepository.findByCountry(country);

        if (!existingStates.isEmpty()) {
            return existingStates.stream()
                    .map(state -> modelMapper.map(state, StateDto.class))
                    .collect(Collectors.toList());
        }

        List<State> states = restTemplate.exchange(API_STATE_URL, HttpMethod.GET, entity, new ParameterizedTypeReference<List<State>>() {}, countryIso).getBody();
        assert states != null;

        List<State> newStates = new ArrayList<>();
        for (State state : states) {
            if (!stateRepository.existsByIso2AndCountry(state.getIso2(), country)) {
                state.setCountry(country);
                newStates.add(state);
            }
        }

        List<State> savedStates = stateRepository.saveAll(newStates);

        // Trả về tất cả các trạng thái vừa lưu
        return savedStates.stream()
                .map(state -> modelMapper.map(state, StateDto.class))
                .collect(Collectors.toList());
    }

    public List<CityDto> fetchAndSaveCities(String countryIso, String stateIso) {
        HttpEntity<String> entity = createHttpEntityWithHeaders();

        // Lấy State dựa trên ISO và Country
        State state = stateRepository.findByIso2AndCountryIso2(stateIso, countryIso)
                .orElseThrow(() -> new RuntimeException("State not found for ISO2: " + stateIso + " and country ISO2: " + countryIso));

        // Kiểm tra xem các City cho State này đã tồn tại trong cơ sở dữ liệu chưa
        List<City> existingCities = cityRepository.findByState(state);

        // Nếu đã có City trong DB, chuyển đổi sang DTO và trả về luôn
        if (!existingCities.isEmpty()) {
            return existingCities.stream()
                    .map(city -> modelMapper.map(city, CityDto.class))
                    .collect(Collectors.toList());
        }

        // Nếu chưa có, gọi API để lấy danh sách City mới
        List<City> cities = restTemplate.exchange(
                API_CITY_URL,
                HttpMethod.GET,
                entity,
                new ParameterizedTypeReference<List<City>>() {},
                countryIso,
                stateIso
        ).getBody();

        assert cities != null;

        // Lọc các City chưa tồn tại trong cơ sở dữ liệu và thiết lập State
        List<City> newCities = cities.stream()
                .filter(city -> cityRepository.findByNameAndState(city.getName(), state).isEmpty())
                .peek(city -> city.setState(state))
                .collect(Collectors.toList());

        // Lưu các City mới vào cơ sở dữ liệu
        List<City> savedCities = cityRepository.saveAll(newCities);

        // Chuyển đổi các City đã lưu sang DTO và trả về
        return savedCities.stream()
                .map(city -> modelMapper.map(city, CityDto.class))
                .collect(Collectors.toList());
    }

    public User saveUser(User user) {
        user.setStatus(Status.ONLINE);
        userRepository.save(user);
        return user;
    }

    public Page<?> getUsersWithFilters(Integer userId, String knowAs, String gender, Integer ageFrom, Integer ageTo, String orderBy, int page, int size, User requestingUser) {
        Pageable pageable;

        // Sắp xếp theo `dateCreated` hoặc `lastActive`
        if ("dateCreated".equals(orderBy)) {
            pageable = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.DESC, "dateCreated"));
        } else {
            pageable = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.DESC, "lastActive"));
        }

        if(knowAs != null) {
            knowAs = knowAs.toLowerCase();
        }

        if (gender != null) {
            gender = gender.toLowerCase();
        }

        if (ageFrom != null && ageTo != null) {
            LocalDate currentDate = LocalDate.now();
            LocalDate startDate = currentDate.minusYears(ageTo);
            LocalDate endDate = currentDate.minusYears(ageFrom);

            // Sử dụng query mới với bộ lọc bạn bè
            return userRepository.findUsersByGenderAgeAndExcludeFriends(userId, knowAs, gender, startDate, endDate, pageable)
                    .map(user -> {
                        boolean isFriend = friendshipRepository.isFriend(userId, user.getId()); // Kiểm tra mối quan hệ bạn bè
                        return user.isPrivate() ? UserMapper.toMemberResponseBasic(user) : UserMapper.toMemberResponse(user, requestingUser, isFriend);
                    });
        } else {
            // Sử dụng query mới khi không có điều kiện tuổi
            return userRepository.findUsersByGenderAndExcludeFriends(userId, knowAs, gender, pageable)
                    .map(user -> {
                        boolean isFriend = friendshipRepository.isFriend(userId, user.getId()); // Kiểm tra mối quan hệ bạn bè
                        return user.isPrivate() ? UserMapper.toMemberResponseBasic(user) : UserMapper.toMemberResponse(user, requestingUser, isFriend);
                    });
        }
    }


    public MemberResponse findUserByEmail(String email, User requestingUser) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            boolean isFriend = friendshipRepository.isFriend(requestingUser.getId(), user.getId()); // Kiểm tra mối quan hệ bạn bè
            return UserMapper.toMemberResponse(user, requestingUser, isFriend);
        } else {
            return null;
        }
    }

    public boolean isFriend(int userId, int currentUserId) {
        return friendshipRepository.isFriend(userId, currentUserId);
    }

//    public MemberResponse getUserByKnowAs(String knowAs) {
//        User user = userRepository.findByKnowAs(knowAs)
//                .orElseThrow(() -> new NoSuchElementException("User with knowAs '" + knowAs + "' not found."));
//        return UserMapper.toMemberResponse(user);
//    }

    public MemberResponse getUserInfo(Integer currentUserId, Integer targetUserId) {
        User targetUser = userRepository.findById(targetUserId)
                .orElseThrow(() -> new EntityNotFoundException("User not found."));

        return UserMapper.toMemberResponseBasic(targetUser);
    }

    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPass(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        userRepository.save(user);
    }

    // Lấy tất cả sở thích
    public List<InterestDto> getAllInterests() {
        return interestRepository.findAll().stream()
                .map(interest -> new InterestDto(interest.getId(), interest.getName()))
                .collect(Collectors.toList());
    }

    public User updateMember(User user, MemberUpdateDto memberUpdateDto) {
        user.setIntroduction(memberUpdateDto.getIntroduction());
        if (memberUpdateDto.getInterests() != null) {
            List<Interest> interests = memberUpdateDto.getInterests().stream()
                    .map(id -> interestRepository.findById(id)
                            .orElseThrow(() -> new RuntimeException("Interest not found with id: " + id)))
                    .collect(Collectors.toList());
            user.setInterests(interests);
        }
        user.setLookingFor(memberUpdateDto.getLookingFor());
        user.setPrivate(memberUpdateDto.isPrivate());

        // Cập nhật Country
        if (memberUpdateDto.getCountryId() != null) {
            Country country = countryRepository.findById(memberUpdateDto.getCountryId())
                    .orElseThrow(() -> new RuntimeException("Country not found with id: " + memberUpdateDto.getCountryId()));
            user.setCountry(country);
        }

        // Cập nhật State
        if (memberUpdateDto.getStateId() != null) {
            State state = stateRepository.findById(memberUpdateDto.getStateId())
                    .orElseThrow(() -> new RuntimeException("State not found with id: " + memberUpdateDto.getStateId()));
            user.setState(state);
        }

        // Cập nhật City
        if (memberUpdateDto.getCityId() != null) {
            City city = cityRepository.findById(memberUpdateDto.getCityId())
                    .orElseThrow(() -> new RuntimeException("City not found with id: " + memberUpdateDto.getCityId()));
            user.setCity(city);
        }

        return user;
    }

    public String getAvatarUrlByUsername(String username) {
        User user = userRepository.findByKnowAs(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Photo mainPhoto = photoRepository.findByUserAndIsMainTrue(user);
        return mainPhoto != null ? mainPhoto.getUrl() : null;
    }

}
