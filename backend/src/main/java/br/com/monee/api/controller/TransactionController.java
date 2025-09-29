package br.com.monee.api.controller;

import br.com.monee.api.domain.transaction.TransactionRequestDTO;
import br.com.monee.api.domain.transaction.TransactionResponseDTO;
import br.com.monee.api.domain.transaction.tag.TagRequestDTO;
import br.com.monee.api.service.TransactionService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<TransactionResponseDTO> save(@RequestBody @Valid TransactionRequestDTO dto,
                                                       @PathVariable UUID userId){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.transactionService.save(userId,dto));
    }

    @PostMapping("/{userId}/{transactionId}/tags")
    public ResponseEntity<Void> addTagsToTransaction(@PathVariable UUID transactionId,
                                                     @RequestBody TagRequestDTO tagRequestDTO,
                                                     @PathVariable UUID userId){

        this.transactionService.addTags(userId, transactionId, tagRequestDTO.tagIds());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<TransactionResponseDTO>> getUserTransactions(@PathVariable UUID userId){
        return ResponseEntity.ok(this.transactionService.getAllUserTransactions(userId));
    }
}
