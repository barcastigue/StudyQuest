package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.UserEntity;
import com.csit321g6.luminance.studyquest.service.UserService;

@RestController
@RequestMapping("/user/api")
// needed for the React front end (CRA = 3000, Vite = 5173)
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class UserController {

    @Autowired
    UserService serv;

    public UserController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewUser")
    public UserEntity postUser(@RequestBody UserEntity user) {
        return serv.postUser(user);
    }

    // R - Read
    @GetMapping("/getAllUsers")
    public List<UserEntity> getAllUsers() {
        return serv.getAllUsers();
    }

    // U - Update
    @PutMapping("/putUser")
    public UserEntity putUser(@RequestParam int id, @RequestBody UserEntity newDetails) {
        return serv.putUser(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteUser/{id}")
    public String deleteUser(@PathVariable int id) {
        return serv.deleteUser(id);
    }
}
