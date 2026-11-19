package com.csit321g6.luminance.studyquest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private ResponseEntity<NameErrorResponse> build(HttpStatus status, String message) {
        NameErrorResponse error = new NameErrorResponse();
        error.setStatus(status.value());
        error.setMessage(message);
        error.setTimestamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, status);
    }

    // specific exceptions
    @ExceptionHandler
    public ResponseEntity<NameErrorResponse> handleException(NameNotFoundException ex) {
        return build(HttpStatus.NOT_FOUND, ex.getMessage());
    }

    // username/email already taken -> 409
    @ExceptionHandler
    public ResponseEntity<NameErrorResponse> handleDuplicate(DuplicateException ex) {
        return build(HttpStatus.CONFLICT, ex.getMessage());
    }

    // wrong username or password -> 401
    @ExceptionHandler
    public ResponseEntity<NameErrorResponse> handleInvalidCredentials(InvalidCredentialsException ex) {
        return build(HttpStatus.UNAUTHORIZED, ex.getMessage());
    }

    // generic exception
    @ExceptionHandler
    public ResponseEntity<NameErrorResponse> handleException(Exception ex) {
        return build(HttpStatus.BAD_REQUEST, ex.getMessage());
    }
}
