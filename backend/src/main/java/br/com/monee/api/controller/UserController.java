package br.com.monee.api.controller;
import br.com.monee.api.domain.bankAccount.BankAccountRequestDTO;
import br.com.monee.api.domain.creditCard.CreditCardRequestDTO;
import br.com.monee.api.domain.transaction.TransactionRequestDTO;
import br.com.monee.api.domain.transaction.category.TransactionCategoryRequestDTO;
import br.com.monee.api.domain.transaction.tag.TagDTO;
import br.com.monee.api.domain.transaction.tag.TagRequestDTO;
import br.com.monee.api.util.mapper.TransactionMapper;
import br.com.monee.api.service.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final TransactionMapper transactionMapper;
    private final BankAccountService bankAccountService;
    private final TransactionService transactionService;
    private final TagService tagService;
    private final CreditCardService creditCardService;
    private final TransactionCategoryService transactionCategoryService;


    public UserController(UserService userService, TransactionMapper transactionMapper,
                          BankAccountService bankAccountService, TransactionService transactionService, TagService tagService, CreditCardService creditCardService, TransactionCategoryService transactionCategoryService)
    {
        this.userService = userService;
        this.transactionMapper = transactionMapper;
        this.bankAccountService = bankAccountService;
        this.transactionService = transactionService;
        this.tagService = tagService;
        this.creditCardService = creditCardService;
        this.transactionCategoryService = transactionCategoryService;
    }

}