package br.com.stefany.emailsender.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stefany.emailsender.models.EmailRequestBody;
import br.com.stefany.emailsender.services.EmailService;

@RestController
@RequestMapping("/send-email")
@CrossOrigin("*")
public class SendEmail {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> send(@RequestBody EmailRequestBody emailRequestBody) {
        return emailService.sendEmail(emailRequestBody.getEmail());
    }
}
