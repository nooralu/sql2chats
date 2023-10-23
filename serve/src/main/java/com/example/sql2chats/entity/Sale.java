package com.example.sql2chats.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime saleDate;

    @ManyToOne
    private Product product;

    private Long quantity;

    private Long unitPrice;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Warehouse warehouse;
}
