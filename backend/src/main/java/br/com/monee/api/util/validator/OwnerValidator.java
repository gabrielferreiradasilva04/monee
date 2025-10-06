package br.com.monee.api.util.validator;

import br.com.monee.api.domain.OwnedEntity;
import br.com.monee.api.domain.user.UserEntity;
import br.com.monee.api.infra.exception.custom.ImmutableSystemEntityException;
import br.com.monee.api.infra.exception.custom.UnauthorizedEntityAccessException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class OwnerValidator {

    public void validateOwnership(OwnedEntity entity){
        if(entity.getUserId() == null) throw new ImmutableSystemEntityException("Recurso padrão do sistema");
        if(!entity.getUserId().equals(this.getAuthenticatedUserId())) throw new UnauthorizedEntityAccessException("Acesso negado");
    }

    private UUID getAuthenticatedUserId(){
        try {
            UserEntity user = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            return user.getId();
        }catch (RuntimeException ignored){
            throw new UnauthorizedEntityAccessException("Usuário não autorizado");
        }
    }
}
