package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.QuizTypeEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.QuizTypeRepository;

@Service
public class QuizTypeService {

    @Autowired
    QuizTypeRepository repo;

    public QuizTypeService() {
        super();
    }

    // C - Create
    public QuizTypeEntity postQuizType(QuizTypeEntity quiztype) {
        return repo.save(quiztype);
    }

    // R - Read
    public List<QuizTypeEntity> getAllQuizTypes() {
        return repo.findAll();
    }

    // U - Update
    public QuizTypeEntity putQuizType(int id, QuizTypeEntity newDetails) {
        QuizTypeEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("QuizType " + id + " does not exist!"));
            existing.setName(newDetails.getName());
            existing.setDescription(newDetails.getDescription());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteQuizType(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("QuizType " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "QuizType " + id + " is successfully deleted!";
    }
}
