package fpt.edu.vn.backend.dto;

import fpt.edu.vn.backend.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotBlank
    @NotNull
    @Size(min = 2, message = "First name must be at least 2 characters")
    private String firstName;

    @NotBlank
    @NotNull
    @Size(min = 2, message = "Last name must be at least 2 characters")
    private String lastName;

    @NotBlank
    @NotNull
    private String knowAs;

    @NotNull
    private LocalDate dateOfBirth;

    @NotBlank
    @NotNull
    private String gender;

    private String countryIso;

    private String stateIso;

    private Long cityId;

    @NotBlank
    @NotNull
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank
    @NotNull
    private String pass;

    private Role role;

}

