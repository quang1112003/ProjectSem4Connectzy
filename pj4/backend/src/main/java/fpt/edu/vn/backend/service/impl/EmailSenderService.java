package fpt.edu.vn.backend.service.impl;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.messaging.MessagingException;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationCode(String recipientEmail, String verificationCode) throws jakarta.mail.MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        try {
            // Cấu hình người gửi
            helper.setFrom("vegakinvietnam@gmail.com", "Connectzy Support"); // Đặt tên người gửi là "Connectzy Support"
            helper.setTo(recipientEmail);
            helper.setSubject("Your Verification Code");

            // Tạo nội dung email dạng HTML
            String emailContent = "<html>"
                    + "<body style='font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px;'>"
                    + "<div style='max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px;'>"
                    + "<h2 style='color: #333;'>Hello!</h2>"
                    + "<p style='font-size: 16px; color: #555;'>Welcome to <strong>Connectzy</strong>. Please find your verification code below:</p>"
                    + "<h3 style='font-size: 24px; color: #0066cc; text-align: center; padding: 10px;'>"
                    + verificationCode
                    + "</h3>"
                    + "<p style='font-size: 16px; color: #555;'>If you did not request this verification, please ignore this email.</p>"
                    + "<p style='font-size: 16px; color: #555;'>Best regards,</p>"
                    + "<p style='font-size: 16px; color: #555;'>The Connectzy Team</p>"
                    + "</div>"
                    + "</body>"
                    + "</html>";

            helper.setText(emailContent, true);

            mailSender.send(message);

        } catch (MessagingException | UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to send verification email");
        }
    }
}
