package fpt.edu.vn.backend.service.impl;

import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import fpt.edu.vn.backend.config.TwilioConfig;
import fpt.edu.vn.backend.dto.OtpRequest;
import fpt.edu.vn.backend.dto.OtpResponseDto;
import fpt.edu.vn.backend.dto.OtpValidationRequest;
import fpt.edu.vn.backend.entity.OtpStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Set;

@Service
@Slf4j
public class SmsService {
    @Autowired
    private TwilioConfig twilioConfig;

    Map<String, String> otpMap = new HashMap<>();

    public OtpResponseDto sendSMS(OtpRequest otpRequest) {
        OtpResponseDto otpResponseDto = null;
        try {
            // Check if the phone number is in E.164 format and reformat if needed
            String formattedPhoneNumber = formatPhoneNumber(otpRequest.getPhoneNumber());

            PhoneNumber to = new PhoneNumber(formattedPhoneNumber); // To
            PhoneNumber from = new PhoneNumber(twilioConfig.getPhoneNumber()); // From

            // Generate OTP
            String otp = generateOTP();
            String otpMessage = "Dear Customer, Your OTP is " + otp + " for sending SMS through Spring Boot application. Thank you.";

            // Send the SMS
            Message message = Message
                    .creator(to, from, otpMessage)
                    .create();

            // Save OTP for later validation
            otpMap.put(otpRequest.getUsername(), otp);

            otpResponseDto = new OtpResponseDto(OtpStatus.DELIVERED, otpMessage);

        } catch (Exception e) {
            e.printStackTrace();
            otpResponseDto = new OtpResponseDto(OtpStatus.FAILED, e.getMessage());
        }

        return otpResponseDto;
    }

    // Format the phone number to E.164 format
    private String formatPhoneNumber(String phoneNumber) {
        // Ensure that the phone number starts with '+'. You can add more validation logic if needed.
        if (!phoneNumber.startsWith("+")) {
            // Assuming you want to enforce a specific country code, like +84 for Vietnam
            phoneNumber = "+84" + phoneNumber.substring(1);  // Replace the starting 0 with +84
        }
        return phoneNumber;
    }


    public String validateOtp(OtpValidationRequest otpValidationRequest) {
        Set<String> keys = otpMap.keySet();
        String username = null;
        for (String key : keys)
            username = key;
        if (otpValidationRequest.getUsername().equals(username)) {
            otpMap.remove(username, otpValidationRequest.getOtpNumber());
            return "OTP is valid!";
        } else {
            return "OTP is invalid!";
        }
    }

    private String generateOTP() {
        return new DecimalFormat("000000")
                .format(new Random().nextInt(999999));
    }
}
