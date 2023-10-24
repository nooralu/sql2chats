package com.example.sql2chats.controller;

import com.example.sql2chats.entity.InventoryItem;
import com.example.sql2chats.service.InventoryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class InventoryItemController {

    private final InventoryItemService inventoryItemService;

    @Autowired
    public InventoryItemController(InventoryItemService inventoryItemService) {
        this.inventoryItemService = inventoryItemService;
    }

    @PostMapping("/")
    public ResponseEntity<InventoryItem> createInventoryItem(@RequestBody InventoryItem inventoryItem) {
        InventoryItem newItem = inventoryItemService.createInventoryItem(inventoryItem);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InventoryItem> getInventoryItemById(@PathVariable Long id) {
        InventoryItem item = inventoryItemService.getInventoryItemById(id);
        if (item != null) {
            return new ResponseEntity<>(item, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<InventoryItem>> getAllInventoryItems() {
        List<InventoryItem> items = inventoryItemService.getAllInventoryItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

}
