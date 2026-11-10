package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.AttemptAnswerEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.AttemptAnswerRepository;

@Service
public class AttemptAnswerService {

    @Autowired
    AttemptAnswerRepository repo;

    public AttemptAnswerService() {
        super();
    }

    // C - Create
    public AttemptAnswerEntity postAttemptAnswer(AttemptAnswerEntity attemptanswer) {
        return repo.save(attemptanswer);
    }

    // R - Read
    public List<AttemptAnswerEntity> getAllAttemptAnswers() {
        return repo.findAll();
    }

    // U - Update
    public AttemptAnswerEntity putAttemptAnswer(int id, AttemptAnswerEntity newDetails) {
        AttemptAnswerEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("AttemptAnswer " + id + " does not exist!"));
            existing.setUserAnswer(newDetails.getUserAnswer());
            existing.setIsCorrect(newDetails.getIsCorrect());
            existing.setAttempt(newDetails.getAttempt());
            existing.setQuestion(newDetails.getQuestion());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteAttemptAnswer(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("AttemptAnswer " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "AttemptAnswer " + id + " is successfully deleted!";
    }
}
