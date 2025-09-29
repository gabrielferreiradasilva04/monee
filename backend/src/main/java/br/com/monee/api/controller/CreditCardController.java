package br.com.monee.api.controller;

import br.com.monee.api.domain.creditCard.CreditCardRequestDTO;
import br.com.monee.api.domain.creditCard.CreditCardResponseDTO;
import br.com.monee.api.service.CreditCardService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/credit-cards")
public class CreditCardController {
    private final CreditCardService creditCardService;

    public CreditCardController(CreditCardService creditCardService) {
        this.creditCardService = creditCardService;
    }

    @PostMapping("/{bankId}")
    public ResponseEntity<CreditCardResponseDTO> save(@PathVariable UUID bankId,
                                                      @RequestBody @Valid CreditCardRequestDTO dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.creditCardService.save(bankId, dto));
    }
}
