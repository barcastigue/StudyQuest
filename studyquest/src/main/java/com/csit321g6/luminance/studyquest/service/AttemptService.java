package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.AttemptEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.AttemptRepository;

@Service
public class AttemptService {

    @Autowired
    AttemptRepository repo;

    public AttemptService() {
        super();
    }

    // C - Create
    public AttemptEntity postAttempt(AttemptEntity attempt) {
        return repo.save(attempt);
    }

    // R - Read
    public List<AttemptEntity> getAllAttempts() {
        return repo.findAll();
    }

    // U - Update
    public AttemptEntity putAttempt(int id, AttemptEntity newDetails) {
        AttemptEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Attempt " + id + " does not exist!"));
            existing.setScore(newDetails.getScore());
            existing.setXpEarned(newDetails.getXpEarned());
            existing.setStartedAt(newDetails.getStartedAt());
            existing.setCompletedAt(newDetails.getCompletedAt());
            existing.setUser(newDetails.getUser());
            existing.setQuiz(newDetails.getQuiz());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteAttempt(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Attempt " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Attempt " + id + " is successfully deleted!";
    }
}
