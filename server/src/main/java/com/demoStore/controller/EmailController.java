package com.demoStore.controller;

import com.demoStore.entity.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;



@RestController
public class EmailController {

    @Autowired
    private JavaMailSender sender;

    @RequestMapping(value="/sent", method=RequestMethod.POST)
    public String sendMail(@RequestBody Email email) {
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        try {
            helper.setTo("ecoworm.ua@gmail.com");
            helper.setText(email.getPhone() + System.lineSeparator() + email.getEmail());
            helper.setSubject(email.getName());
            helper.setFrom(email.getEmail());
        } catch (MessagingException e) {
            e.printStackTrace();
            return "Error while sending mail ..";
        }
        sender.send(message);
        return "Mail Sent Success!";
    }

}
