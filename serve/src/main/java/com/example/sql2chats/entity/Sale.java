package com.example.sql2chats.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date saleDate;

    @ManyToOne
    private Product product;

    private int quantity;

    private double unitPrice;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Warehouse warehouse;
}
