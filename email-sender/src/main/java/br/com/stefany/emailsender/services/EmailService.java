package br.com.stefany.emailsender.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public ResponseEntity<String> sendEmail(String person) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
    
            message.setTo(person);
            message.setSubject("newsletter-signup");
            message.setText("Thank you for the sub :)");
    
            javaMailSender.send(message);
            return ResponseEntity.status(HttpStatus.OK).body("Success");
        } catch(Exception e) {
            System.out.println(e.toString());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Fail");
        }
    }
}
