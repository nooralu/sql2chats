package com.example.sql2chats.controller;

import com.example.sql2chats.entity.Purchase;
import com.example.sql2chats.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/purchases")
public class PurchaseController {

    private final PurchaseService purchaseService;

    @Autowired
    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @PostMapping("/")
    public ResponseEntity<Purchase> createPurchase(@RequestBody Purchase purchase) {
        Purchase newPurchase = purchaseService.createPurchase(purchase);
        return new ResponseEntity<>(newPurchase, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Purchase> getPurchaseById(@PathVariable Long id) {
        Purchase purchase = purchaseService.getPurchaseById(id);
        if (purchase != null) {
            return new ResponseEntity<>(purchase, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Purchase>> getAllPurchases() {
        List<Purchase> purchases = purchaseService.getAllPurchases();
        return new ResponseEntity<>(purchases, HttpStatus.OK);
    }
}
