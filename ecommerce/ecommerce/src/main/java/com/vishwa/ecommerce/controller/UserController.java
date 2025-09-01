package com.vishwa.ecommerce.controller;

import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @GetMapping("/me")
    public Map<String, Object> getCurrentUser(OAuth2AuthenticationToken authentication) {
        Map<String, Object> userDetails = new HashMap<>();
        if (authentication != null) {
            Map<String, Object> attributes = authentication.getPrincipal().getAttributes();
            userDetails.put("name", attributes.get("name"));
            userDetails.put("email", attributes.get("email"));
            userDetails.put("picture", attributes.get("picture"));
        }
        System.out.println(userDetails);
        return userDetails;
    }
}