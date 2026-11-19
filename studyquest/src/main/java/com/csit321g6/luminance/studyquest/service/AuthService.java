package com.csit321g6.luminance.studyquest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.dto.LoginRequest;
import com.csit321g6.luminance.studyquest.dto.RegisterRequest;
import com.csit321g6.luminance.studyquest.entity.UserEntity;
import com.csit321g6.luminance.studyquest.exception.DuplicateException;
import com.csit321g6.luminance.studyquest.exception.InvalidCredentialsException;
import com.csit321g6.luminance.studyquest.repository.UserRepository;

@Service
public class AuthService {

    private static final int MIN_PASSWORD_LENGTH = 8;

    @Autowired
    UserRepository repo;

    @Autowired
    PasswordEncoder encoder;

    public AuthService() {
        super();
    }

    // REGISTER ni
    public UserEntity register(RegisterRequest req) {
        String username = clean(req.username());
        String email = clean(req.email());
        String password = req.password();

        if (username.isEmpty() || username.length() > 50) {
            throw new IllegalArgumentException("Username is required (max 50 characters).");
        }
        if (!email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$") || email.length() > 100) {
            throw new IllegalArgumentException("Please enter a valid email address.");
        }
        if (password == null || password.length() < MIN_PASSWORD_LENGTH) {
            throw new IllegalArgumentException("Password must be at least " + MIN_PASSWORD_LENGTH + " characters.");
        }
        if (repo.existsByUsernameIgnoreCase(username)) {
            throw new DuplicateException("That username is already taken.");
        }
        if (repo.existsByEmailIgnoreCase(email)) {
            throw new DuplicateException("That email is already registered.");
        }

        UserEntity user = new UserEntity();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(encoder.encode(password)); 
        return repo.save(user);
    }

    public UserEntity login(LoginRequest req) {
        String email = clean(req.email());
        String password = req.password() == null ? "" : req.password();

        UserEntity user = repo.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password."));

        if (!encoder.matches(password, user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password.");
        }
        return user;
    }

    private String clean(String s) {
        return s == null ? "" : s.trim();
    }
}
