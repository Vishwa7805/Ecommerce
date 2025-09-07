package com.vishwa.ecommerce.controller;

import com.vishwa.ecommerce.model.Product;
import com.vishwa.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/product-details/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping("/product-image/{id}")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable int id) {
        Product product = productService.getAllProducts().stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);

        return ResponseEntity.ok()
                .header("Content-Type", product.getImageType())
                .body(product.getImageData());
    }

    @PostMapping("/add-products")
    public ResponseEntity<?> addProduct(@RequestPart("product") Product product,
                                        @RequestPart("image") MultipartFile imageFile) {
        try {
            Product prd = productService.addProduct(product, imageFile);
            return new ResponseEntity<>(prd, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
