package br.com.monee.api.domain;

import br.com.monee.api.domain.user.UserEntity;

import java.util.UUID;

public interface OwnedEntity {
    UUID getUserId();
}
