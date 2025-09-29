package br.com.monee.api.controller;

import br.com.monee.api.domain.bankAccount.BankAccountRequestDTO;
import br.com.monee.api.domain.bankAccount.BankAccountResponseDTO;
import br.com.monee.api.service.BankAccountService;
import jakarta.validation.Path;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/bank-accounts")
public class BankAccountController {
    private final BankAccountService bankAccountService;

    public BankAccountController(BankAccountService bankAccountService) {
        this.bankAccountService = bankAccountService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<BankAccountResponseDTO> save(@PathVariable UUID userId, @RequestBody @Valid BankAccountRequestDTO dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.bankAccountService.save(userId, dto));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<BankAccountResponseDTO>> getAllUserBankAccounts(@PathVariable UUID userId){
        return ResponseEntity.ok().body(this.bankAccountService.getUserBankAccounts(userId));
    }



}
