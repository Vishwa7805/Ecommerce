package com.vishwa.ecommerce.repository;

import com.vishwa.ecommerce.model.CartItem;
import com.vishwa.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<CartItem, Integer> {
    List<CartItem> findByUser(User user);
    Optional<CartItem> findByUserAndProductId(User user, int productId);
}
