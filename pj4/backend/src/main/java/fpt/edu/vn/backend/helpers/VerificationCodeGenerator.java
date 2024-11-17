package fpt.edu.vn.backend.helpers;

import java.util.Random;

public class VerificationCodeGenerator {
    public static String generateCode() {
        Random random = new Random();
        int code = 100000 + random.nextInt(900000); // Sinh số từ 100000 đến 999999
        return String.valueOf(code);
    }
}
