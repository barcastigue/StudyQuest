package com.csit321g6.luminance.studyquest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.dto.AuthResponse;
import com.csit321g6.luminance.studyquest.dto.LoginRequest;
import com.csit321g6.luminance.studyquest.dto.RegisterRequest;
import com.csit321g6.luminance.studyquest.service.AuthService;

@RestController
@RequestMapping("/auth/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class AuthController {

    @Autowired
    AuthService serv;

    public AuthController() {
        super();
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthResponse register(@RequestBody RegisterRequest req) {
        return AuthResponse.from(serv.register(req));
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest req) {
        return AuthResponse.from(serv.login(req));
    }
}
