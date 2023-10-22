package com.example.sql2chats.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date purchaseDate;

    @ManyToOne
    private Product product;

    private int quantity;

    private double unitPrice;

    @ManyToOne
    private Supplier supplier;
}