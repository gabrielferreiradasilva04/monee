package br.com.monee.api.infra.exception.custom;

public class ImmutableSystemEntityException extends RuntimeException {
    public ImmutableSystemEntityException(String message) {
        super(message);
    }
}
