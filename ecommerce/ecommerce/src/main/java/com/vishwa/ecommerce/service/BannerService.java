package com.vishwa.ecommerce.service;

import com.vishwa.ecommerce.model.Banner;
import com.vishwa.ecommerce.repository.BannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class BannerService {
    @Autowired
    private BannerRepository bannerRepository;

    public List<Banner> getAllBanners() {
        return bannerRepository.findAll();
    }

    public Banner addBanner(Banner banner, MultipartFile imageFile) throws Exception {
        banner.setImageName(imageFile.getOriginalFilename());
        banner.setImageType(imageFile.getContentType());
        banner.setImageData(imageFile.getBytes());
        return bannerRepository.save(banner);
    }
}
