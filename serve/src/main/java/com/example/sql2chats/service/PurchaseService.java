package com.example.sql2chats.service;

import com.example.sql2chats.entity.Purchase;
import com.example.sql2chats.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;

    @Autowired
    public PurchaseService(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public Purchase createPurchase(Purchase purchase) {
        purchase.setPurchaseDate(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }

    public Purchase getPurchaseById(Long id) {
        return purchaseRepository.findById(id).orElse(null);
    }

    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }
}
