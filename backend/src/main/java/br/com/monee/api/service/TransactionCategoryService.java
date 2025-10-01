package br.com.monee.api.service;

import br.com.monee.api.infra.exception.custom.ImmutableSystemEntityException;
import br.com.monee.api.infra.exception.custom.UnauthorizedEntityAccessException;
import br.com.monee.api.util.mapper.TransactionCategoryMapper;
import br.com.monee.api.domain.transaction.category.TransactionCategoryEntity;
import br.com.monee.api.domain.user.UserEntity;
import br.com.monee.api.domain.transaction.category.TransactionCategoryRequestDTO;
import br.com.monee.api.domain.transaction.category.TransactionCategoryResponseDTO;
import br.com.monee.api.repository.TransactionCategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionCategoryService {
    private final TransactionCategoryRepository transactionCategoryRepository;
    private final UserService userService;
    private final TransactionCategoryMapper transactionCategoryMapper;

    public TransactionCategoryService(TransactionCategoryRepository transactionCategoryRepository, UserService userService, TransactionCategoryMapper transactionCategoryMapper) {
        this.transactionCategoryRepository = transactionCategoryRepository;
        this.userService = userService;
        this.transactionCategoryMapper = transactionCategoryMapper;
    }

    public TransactionCategoryEntity getById(UUID transactionCategoryId) {
        return this.transactionCategoryRepository
                .findById(transactionCategoryId)
                .orElseThrow( () -> new EntityNotFoundException(
                        "Categoria de transação não encontrada"
                ));
    }

    public List<TransactionCategoryResponseDTO> getAllTransactions(UUID userId){
        return this.transactionCategoryRepository.getAllTransactionCategories(userId);
    }

    public TransactionCategoryResponseDTO save(UUID userId, TransactionCategoryRequestDTO transactionCategoryRequestDTO){
        UserEntity user = this.userService.getUserByUUID(userId);
        TransactionCategoryEntity entity = this.transactionCategoryMapper.requestToEntity(transactionCategoryRequestDTO);

        entity.setUser(user);
        return this.transactionCategoryMapper.entityToResponse(this.transactionCategoryRepository.save(entity));
    }

    public void update(UUID transactionId, UUID userId, TransactionCategoryRequestDTO dto){
        Optional<TransactionCategoryEntity> optional = this.transactionCategoryRepository.findById(transactionId);
        if(optional.isEmpty()) throw new EntityNotFoundException("Transação não encontrada");
        if(optional.get().getUser() == null) throw new ImmutableSystemEntityException("Categoria padrão do sistema. Imutável");
        if(!optional.get().getUser().getId().equals(userId)) throw new UnauthorizedEntityAccessException("Sem autorização para alterar");

        TransactionCategoryEntity entity = optional.get();

        entity.setTitle(dto.title());
        entity.setColor(dto.color());
        entity.setIcon(dto.icon());
        entity.setDescription(dto.description());

        this.transactionCategoryRepository.save(entity);
    }
}
