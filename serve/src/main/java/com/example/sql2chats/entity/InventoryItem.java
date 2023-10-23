package com.example.sql2chats.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class InventoryItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Warehouse warehouse;

    private int quantity;

    private double purchasingPrice;
}