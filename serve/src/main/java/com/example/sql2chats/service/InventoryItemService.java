package com.example.sql2chats.service;

import com.example.sql2chats.repository.InventoryItemRepository;
import com.example.sql2chats.entity.InventoryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryItemService {

    private final InventoryItemRepository inventoryItemRepository;

    @Autowired
    public InventoryItemService(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }

    public InventoryItem createInventoryItem(InventoryItem inventoryItem) {
        return inventoryItemRepository.save(inventoryItem);
    }

    public InventoryItem getInventoryItemById(Long id) {
        return inventoryItemRepository.findById(id).orElse(null);
    }

    public List<InventoryItem> getAllInventoryItems() {
        return inventoryItemRepository.findAll();
    }
}
