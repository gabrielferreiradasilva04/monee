package br.com.monee.api.controller;

import br.com.monee.api.domain.transaction.category.TransactionCategoryRequestDTO;
import br.com.monee.api.domain.transaction.category.TransactionCategoryResponseDTO;
import br.com.monee.api.service.TransactionCategoryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/transaction-categories")
@Tag(name = "Categorias de transações", description = "endpoint destinado ao gerenciamento de categorias de transações")
public class TransactionCategoryController {

    private final TransactionCategoryService transactionCategoryService;


    public TransactionCategoryController(TransactionCategoryService transactionCategoryService) {
        this.transactionCategoryService = transactionCategoryService;
    }

    @PostMapping("/userId")
    public ResponseEntity<TransactionCategoryResponseDTO> save(@PathVariable UUID userId,
                                                               @RequestBody @Valid TransactionCategoryRequestDTO dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.transactionCategoryService.save(userId, dto));
    }
    @PutMapping("/{userId}/{transactionId}")
    public ResponseEntity<Void> update(@PathVariable UUID transactionId, @PathVariable UUID userId,
                                       @RequestBody @Valid TransactionCategoryRequestDTO dto){
        this.transactionCategoryService.update(transactionId, userId, dto);
        return ResponseEntity.ok().build();

    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<TransactionCategoryResponseDTO>> getAllTransactions(@PathVariable UUID userId){
        return ResponseEntity.ok().body(this.transactionCategoryService.getAllTransactions(userId));
    }


}
