package br.com.monee.api.service;

import br.com.monee.api.infra.dto.PageDTO;
import br.com.monee.api.infra.exception.custom.ImmutableSystemEntityException;
import br.com.monee.api.infra.exception.custom.UnauthorizedEntityAccessException;
import br.com.monee.api.util.mapper.TransactionCategoryMapper;
import br.com.monee.api.domain.transaction.category.TransactionCategoryEntity;
import br.com.monee.api.domain.user.UserEntity;
import br.com.monee.api.domain.transaction.category.TransactionCategoryRequestDTO;
import br.com.monee.api.domain.transaction.category.TransactionCategoryResponseDTO;
import br.com.monee.api.repository.TransactionCategoryRepository;
import br.com.monee.api.util.validator.OwnerValidator;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionCategoryService {
    private final TransactionCategoryRepository transactionCategoryRepository;
    private final UserService userService;
    private final TransactionCategoryMapper transactionCategoryMapper;
    private final OwnerValidator ownerValidator;

    private final String notFoundMessage = "Categoria de transação não encontrada";

    public TransactionCategoryService(TransactionCategoryRepository transactionCategoryRepository, UserService userService, TransactionCategoryMapper transactionCategoryMapper, OwnerValidator ownerValidator) {
        this.transactionCategoryRepository = transactionCategoryRepository;
        this.userService = userService;
        this.transactionCategoryMapper = transactionCategoryMapper;
        this.ownerValidator = ownerValidator;
    }

    public TransactionCategoryEntity getById(UUID transactionCategoryId) {
        return this.transactionCategoryRepository
                .findById(transactionCategoryId)
                .orElseThrow( () -> new EntityNotFoundException(
                        "Categoria de transação não encontrada"
                ));
    }

    public PageDTO<TransactionCategoryResponseDTO> getAllTransactions(String categoryTitle, UUID userId, Pageable pageable){
        Page<TransactionCategoryResponseDTO> page = this.transactionCategoryRepository.findAllTransactionCategories(categoryTitle, userId, pageable);
        return new PageDTO<>(page);
    }

    public TransactionCategoryResponseDTO save(UUID userId, TransactionCategoryRequestDTO transactionCategoryRequestDTO){
        UserEntity user = this.userService.getUserByUUID(userId);
        TransactionCategoryEntity entity = this.transactionCategoryMapper.requestToEntity(transactionCategoryRequestDTO);

        entity.setUser(user);
        return this.transactionCategoryMapper.entityToResponse(this.transactionCategoryRepository.save(entity));
    }

    public void update(UUID transactionCategoryId, TransactionCategoryRequestDTO dto){
        TransactionCategoryEntity transactionCategoryEntity  = this.transactionCategoryRepository.findById(transactionCategoryId)
                .orElseThrow(() -> new EntityNotFoundException("Categoria de transação não encontrada"));

        this.ownerValidator.validateOwnership(transactionCategoryEntity);

        transactionCategoryEntity.setTitle(dto.title());
        transactionCategoryEntity.setColor(dto.color());
        transactionCategoryEntity.setIcon(dto.icon());
        transactionCategoryEntity.setDescription(dto.description());

        this.transactionCategoryRepository.save(transactionCategoryEntity);
    }

    public void delete(UUID transactionCategoryId){
        TransactionCategoryEntity transactionCategoryEntity = this.transactionCategoryRepository.findById(transactionCategoryId)
                .orElseThrow(() -> new EntityNotFoundException("Categoria de transação não encontrada"));
    }
}
