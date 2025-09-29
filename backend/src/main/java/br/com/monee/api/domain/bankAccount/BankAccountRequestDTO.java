package br.com.monee.api.domain.bankAccount;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;

public record BankAccountRequestDTO(@NotBlank(message = "Nome da conta não pode ser nulo") String accountName,
                                    @NotBlank(message = "Descrição não pode ser nula") String description,
                                    String icon, String color, @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") LocalDate createdAt,
                                    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") LocalDate updatedAt) {
}
