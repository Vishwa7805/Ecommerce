package com.vishwa.ecommerce.repository;

import com.vishwa.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    // Additional query methods can be defined here if needed
}
