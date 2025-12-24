package com.vishwa.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private String category;
    private double price;

    private String imageName;
    private String imageType;

    @Lob
    private byte[] imageData;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<CartItem> cartItems;
}
