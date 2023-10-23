package com.example.sql2chats.entity;

import lombok.Data;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Data
@Entity
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private LocalDateTime purchaseDate;

    @ManyToOne
    private Product product;

    private Long quantity;

    private Long unitPrice;

    @ManyToOne
    private Supplier supplier;
}