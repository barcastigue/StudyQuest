package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.UserEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    public UserService() {
        super();
    }

    // C - Create
    // method will return the record being added
    public UserEntity postUser(UserEntity user) {
        return repo.save(user);
    }

    // R - Read
    public List<UserEntity> getAllUsers() {
        return repo.findAll();
    }

    // U - Update
    public UserEntity putUser(int id, UserEntity newDetails) {
        UserEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("User " + id + " does not exist!"));
            existing.setUsername(newDetails.getUsername());
            existing.setEmail(newDetails.getEmail());
            existing.setPassword(newDetails.getPassword());
            existing.setXp(newDetails.getXp());
            existing.setLevel(newDetails.getLevel());
            existing.setCurrentStreak(newDetails.getCurrentStreak());
            existing.setLastActiveDate(newDetails.getLastActiveDate());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteUser(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("User " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "User " + id + " is successfully deleted!";
    }
}
