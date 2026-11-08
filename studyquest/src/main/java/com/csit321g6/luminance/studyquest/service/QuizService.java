package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.QuizEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.QuizRepository;

@Service
public class QuizService {

    @Autowired
    QuizRepository repo;

    public QuizService() {
        super();
    }

    // C - Create
    // method will return the record being added
    public QuizEntity postQuiz(QuizEntity quiz) {
        return repo.save(quiz);
    }

    // R - Read
    public List<QuizEntity> getAllQuizzes() {
        return repo.findAll();
    }

    // U - Update
    public QuizEntity putQuiz(int id, QuizEntity newDetails) {
        QuizEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Quiz " + id + " does not exist!"));
            existing.setTitle(newDetails.getTitle());
            existing.setTotalItems(newDetails.getTotalItems());
            existing.setDifficulty(newDetails.getDifficulty());
            existing.setCreatedAt(newDetails.getCreatedAt());
            existing.setTopic(newDetails.getTopic());
            existing.setQuizType(newDetails.getQuizType());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteQuiz(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Quiz " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Quiz " + id + " is successfully deleted!";
    }
}
