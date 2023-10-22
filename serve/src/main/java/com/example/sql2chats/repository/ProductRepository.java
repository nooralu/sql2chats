package com.example.sql2chats.repository;

import com.example.sql2chats.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}