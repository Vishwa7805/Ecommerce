package com.vishwa.ecommerce.controller;

import com.vishwa.ecommerce.model.Banner;
import com.vishwa.ecommerce.model.Product;
import com.vishwa.ecommerce.service.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class BannerController {
    @Autowired
    private BannerService bannerService;

    @GetMapping("/banners")
    public List<Banner> getAllBanners() {
        return bannerService.getAllBanners();
    }

    @GetMapping("/banner-image/{id}")
    public ResponseEntity<byte[]> getImageByBannerId(@PathVariable int id) {
        Banner banner = bannerService.getAllBanners().stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null);

        return ResponseEntity.ok()
                .header("Content-Type", banner.getImageType())
                .body(banner.getImageData());
    }

    @PostMapping("/seller")
    public ResponseEntity<?> addBanner(@RequestPart("banner") Banner banner,
                                       @RequestPart("image") MultipartFile imageFile) {
        try {
            Banner bnr = bannerService.addBanner(banner, imageFile);
            return new ResponseEntity<>(bnr, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
