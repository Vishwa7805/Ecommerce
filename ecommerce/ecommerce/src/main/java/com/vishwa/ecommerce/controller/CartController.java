package com.vishwa.ecommerce.controller;

import com.vishwa.ecommerce.model.User;
import com.vishwa.ecommerce.service.CartService;
import com.vishwa.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @PostMapping("/add-product={productId}")
    public ResponseEntity<String> addToCart(@AuthenticationPrincipal OAuth2User principal, @PathVariable int productId) {
        if (principal == null) {
            return ResponseEntity.status(401).body("User not authenticated");
        }

        String email = principal.getAttribute("email");
        User user = userService.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found in database: " + email));

        cartService.addItemToCart(user, productId);

        return ResponseEntity.ok("Item added to your unique cart!");
    }
}
