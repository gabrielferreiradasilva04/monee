package br.com.monee.api.domain.bankAccount;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;
import java.util.UUID;

public record BankAccountResponseDTO (UUID id, String accountName, String description,
                                      @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") LocalDateTime createdAt,
                                      @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") LocalDateTime updatedAt,
                                      String icon, String color){
}
