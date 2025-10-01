package br.com.monee.api.infra.exception.custom;

public class UnauthorizedEntityAccessException extends RuntimeException {
    public UnauthorizedEntityAccessException(String message) {
        super(message);
    }
}
