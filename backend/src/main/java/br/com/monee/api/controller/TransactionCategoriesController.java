package br.com.monee.api.controller;

import br.com.monee.api.domain.transaction.category.TransactionCategoryRequestDTO;
import br.com.monee.api.domain.transaction.category.TransactionCategoryResponseDTO;
import br.com.monee.api.service.TransactionCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/transaction-categories")
public class TransactionCategoriesController {
    private final TransactionCategoryService transactionCategoryService;

    public TransactionCategoriesController(TransactionCategoryService transactionCategoryService) {
        this.transactionCategoryService = transactionCategoryService;
    }
    @PostMapping("/{userId")
    public ResponseEntity<TransactionCategoryResponseDTO> save(@PathVariable UUID userId, TransactionCategoryRequestDTO dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.transactionCategoryService.save(userId, dto));
    }
}
