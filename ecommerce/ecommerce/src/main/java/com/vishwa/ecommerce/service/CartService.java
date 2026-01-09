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
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + 1);
            cartRepository.save(item);
        } else {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));

            CartItem newItem = new CartItem();
            newItem.setUser(user);
            newItem.setProduct(product);
            newItem.setQuantity(1);
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

    public void updateProductQuantity(User user, int itemId, int newQuantity) {
        CartItem cartItem = cartRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (cartItem.getUser().getId() == user.getId()) {
            cartItem.setQuantity(newQuantity);
            cartRepository.save(cartItem);
        } else {
            throw new RuntimeException("Unauthorized to update this item");
        }
    }
}
