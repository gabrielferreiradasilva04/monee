package br.com.monee.api.controller;

import br.com.monee.api.domain.transaction.category.TransactionCategoryRequestDTO;
import br.com.monee.api.domain.transaction.category.TransactionCategoryResponseDTO;
import br.com.monee.api.infra.dto.PageDTO;
import br.com.monee.api.service.TransactionCategoryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Pageable;
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

    @PutMapping("/{transactionCategoryId}")
    public ResponseEntity<Void> update(@PathVariable UUID transactionCategoryId,
                                       @RequestBody @Valid TransactionCategoryRequestDTO dto){
        this.transactionCategoryService.update(transactionCategoryId, dto);
        return ResponseEntity.ok().build();

    }

    public ResponseEntity<Void> delete(@PathVariable UUID transactionId, UUID userId){
        return null;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<PageDTO<TransactionCategoryResponseDTO>> getAllTransactions(@PathVariable UUID userId,
                                                                                      Pageable pageable,
                                                                                      @RequestParam(required = false) String categoryTitle){
        return ResponseEntity.ok().body(this.transactionCategoryService.getAllTransactions(categoryTitle, userId, pageable));
    }



}
