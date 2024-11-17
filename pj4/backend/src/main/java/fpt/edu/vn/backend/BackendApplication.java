package fpt.edu.vn.backend;

import com.github.javafaker.Faker;
import com.twilio.Twilio;
import fpt.edu.vn.backend.config.TwilioConfig;
import fpt.edu.vn.backend.entity.Interest;
import fpt.edu.vn.backend.entity.Photo;
import fpt.edu.vn.backend.entity.User;
import fpt.edu.vn.backend.repository.InterestRepository;
import fpt.edu.vn.backend.repository.PhotoRepository;
import fpt.edu.vn.backend.repository.UserRepository;
import fpt.edu.vn.backend.service.impl.AuthenticationService;
import fpt.edu.vn.backend.dto.RegisterRequest;
import fpt.edu.vn.backend.service.impl.EmailSenderService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

import static fpt.edu.vn.backend.entity.Role.*;

@SpringBootApplication
@EnableConfigurationProperties
public class BackendApplication {
	@Autowired
	private TwilioConfig twilioConfig;

	private final Set<String> usedKnowAs = new HashSet<>();

	@PostConstruct
	public void setup() {
		Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService service,
			UserRepository userRepository,
			PhotoRepository photoRepository,
			InterestRepository interestRepository,
			PasswordEncoder passwordEncoder
	) {
		Faker faker = new Faker();
		Random random = new Random();

		return args -> {

			var admin = RegisterRequest.builder()
					.firstName("Le")
					.lastName("Huy")
					.email("huy@gmail.com")
					.pass("password")
					.knowAs("huy")
					.gender("Male")
					.dateOfBirth(LocalDate.of(2003, 1, 30))
					.role(ADMIN)
					.build();

			if (!userRepository.existsByEmail(admin.getEmail())) {
				System.out.println(service.register(admin).getJwt());
			}

			var manager = RegisterRequest.builder()
					.firstName("Nguyen")
					.lastName("Thang")
					.email("thang@gmail.com")
					.pass("password")
					.knowAs("Thang")
					.gender("female")
					.dateOfBirth(LocalDate.of(2002, 12, 30))
					.role(MANAGER)
					.build();

			if (!userRepository.existsByEmail(manager.getEmail())) {
				System.out.println(service.register(manager).getJwt());
			}

			var huy = RegisterRequest.builder()
					.firstName("Nguyen")
					.lastName("Quang")
					.email("quang@gmail.com")
					.pass("password")
					.knowAs("Quang")
					.gender("female")
					.dateOfBirth(LocalDate.of(2002, 12, 30))
					.role(MANAGER)
					.build();

			if (!userRepository.existsByEmail(huy.getEmail())) {
				System.out.println(service.register(huy).getJwt());
			}

			var nam = RegisterRequest.builder()
					.firstName("nam")
					.lastName("nam")
					.email("nam@gmail.com")
					.pass("password")
					.knowAs("nam")
					.gender("female")
					.dateOfBirth(LocalDate.of(2002, 12, 30))
					.role(MANAGER)
					.build();

			if (!userRepository.existsByEmail(nam.getEmail())) {
				System.out.println(service.register(nam).getJwt());
			}

			List<String> interestNames = Arrays.asList("Photography", "Traveling", "Cooking", "Reading", "Gardening", "Sports");

			interestNames.forEach(name -> {
				if (!interestRepository.existsByName(name)) {
					Interest interest = new Interest(null, name, new ArrayList<>());
					interestRepository.save(interest);
				}
			});	


			for (int i = 0; i < 30; i++) {
				LocalDateTime dateCreatedUser = LocalDateTime.now().minusDays(random.nextInt(30) + 1);
				LocalDateTime lastActiveUser = dateCreatedUser.plusSeconds(random.nextInt(86400));

				String gender = faker.options().option("Male", "Female");

				// Generate random email and remove dots from the local part
				String rawEmail = faker.internet().emailAddress();
				String[] emailParts = rawEmail.split("@");
				String emailWithoutDots = emailParts[0].replace(".", "") + "@" + emailParts[1];

				User user = User.builder()
						.firstName(faker.name().firstName())
						.lastName(faker.name().lastName())
						.email(emailWithoutDots)
						.pass(passwordEncoder.encode("password"))
						.knowAs(generateUniqueKnowAs(faker))
						.gender(gender)
						.dateOfBirth(faker.date().birthday(18, 65).toInstant().atZone(java.time.ZoneId.systemDefault()).toLocalDate())
						.role(USER)
						.introduction(faker.lorem().sentence(10))
						.lookingFor(faker.lorem().sentence(5))
						.dateCreated(dateCreatedUser)
						.lastActive(lastActiveUser)
						.build();

//				if (!userRepository.existsByEmail(user.getEmail())) {
//					userRepository.save(user);
//					saveRandomPhoto(user, photoRepository);
//				}
			}
		};
	}

	private void saveRandomPhoto(User user, PhotoRepository photoRepository) throws IOException {
		String[] avatarImages;
		if ("Male".equals(user.getGender())) {
			avatarImages = new String[22]; // Male avatars
			for (int i = 1; i <= 22; i++) {
				avatarImages[i - 1] = "male" + i + ".jpg";
			}
		} else {
			avatarImages = new String[28]; // Female avatars
			for (int i = 1; i <= 28; i++) {
				avatarImages[i - 1] = "female" + i + ".jpg";
			}
		}

		// Randomly select an image from the array
		String selectedAvatar = avatarImages[new Random().nextInt(avatarImages.length)];

		String imageUrl = "http://localhost:8080/images/" + (user.getGender().equals("Male") ? "male/" : "female/") + selectedAvatar;

		Photo photo = Photo.builder()
				.url(imageUrl)
				.isMain(true) // Set the image as main
				.user(user)
				.build();

		photoRepository.save(photo); // Save the photo in the database
	}

	// Method to generate unique knowAs value
	private String generateUniqueKnowAs(Faker faker) {
		String knowAs;
		do {
			knowAs = faker.lorem().characters(5, 6, true, true); // Generate 5-6 letter random word
		} while (usedKnowAs.contains(knowAs));
		usedKnowAs.add(knowAs);
		return knowAs;
	}

}
