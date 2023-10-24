package com.example.sql2chats.service;

import com.example.sql2chats.repository.SaleRepository;
import com.example.sql2chats.entity.Sale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleService {

    private final SaleRepository saleRepository;

    @Autowired
    public SaleService(SaleRepository saleRepository) {
        this.saleRepository = saleRepository;
    }

    public Sale createSale(Sale sale) {
        return saleRepository.save(sale);
    }

    public Sale getSaleById(Long id) {
        return saleRepository.findById(id).orElse(null);
    }

    public List<Sale> getAllSales() {
        return saleRepository.findAll();
    }
}
