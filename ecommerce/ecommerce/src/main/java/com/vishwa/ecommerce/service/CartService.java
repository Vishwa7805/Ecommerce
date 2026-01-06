package com.vishwa.ecommerce.service;

import com.vishwa.ecommerce.model.CartItem;
import com.vishwa.ecommerce.model.Product;
import com.vishwa.ecommerce.model.User;
import com.vishwa.ecommerce.repository.CartRepository;
import com.vishwa.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;


    public void addItemToCart(User user, int productId) {
        Optional<CartItem> existingItem = cartRepository.findByUserAndProductId(user, productId);

        if (existingItem.isPresent()) {
            System.out.println("Product already in cart for user: " + user.getEmail());
        } else {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));

            CartItem newItem = new CartItem();
            newItem.setUser(user);
            newItem.setProduct(product);

            cartRepository.save(newItem);
        }
    }

    public List<CartItem> getCartItemsForUser(User user) {
        return cartRepository.findByUser(user);
    }

    public void removeItemFromCart(User user, int cartItemId) {
        CartItem cartItem = cartRepository.findById(cartItemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (cartItem.getUser().getId().equals(user.getId())) {
            cartRepository.delete(cartItem);
        } else {
            throw new RuntimeException("Unauthorized to delete this item");
        }
    }
}
