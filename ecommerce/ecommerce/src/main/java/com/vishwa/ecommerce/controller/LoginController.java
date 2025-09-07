package com.vishwa.ecommerce.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/loginSuccess")
    public String loginSuccess(@AuthenticationPrincipal OAuth2User oAuth2User) {
        if (oAuth2User != null) {
            System.out.println("OAuth2User attributes:");
            oAuth2User.getAttributes().forEach((k, v) -> System.out.println(k + " : " + v));
        } else {
            System.out.println("OAuth2User is null!");
        }

        // Redirect to frontend after processing
        return "<script>window.location.href='http://localhost:5173';</script>";
    }
}
