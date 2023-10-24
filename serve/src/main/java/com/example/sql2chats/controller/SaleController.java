package com.example.sql2chats.controller;

import com.example.sql2chats.entity.Sale;
import com.example.sql2chats.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleController {

    private final SaleService saleService;

    @Autowired
    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @PostMapping("/")
    public ResponseEntity<Sale> createSale(@RequestBody Sale sale) {
        Sale newSale = saleService.createSale(sale);
        return new ResponseEntity<>(newSale, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sale> getSaleById(@PathVariable Long id) {
        Sale sale = saleService.getSaleById(id);
        if (sale != null) {
            return new ResponseEntity<>(sale, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Sale>> getAllSales() {
        List<Sale> sales = saleService.getAllSales();
        return new ResponseEntity<>(sales, HttpStatus.OK);
    }

}
