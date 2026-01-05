package com.vishwa.ecommerce.controller;

import com.vishwa.ecommerce.model.CartItem;
import com.vishwa.ecommerce.model.User;
import com.vishwa.ecommerce.service.CartService;
import com.vishwa.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/get-products")
    public ResponseEntity<List<CartItem>> getCartItems(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String email = principal.getAttribute("email");
        User user = userService.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found in database: " + email));

        List<CartItem> items = cartService.getCartItemsForUser(user);
        return ResponseEntity.ok(items);
    }
}
