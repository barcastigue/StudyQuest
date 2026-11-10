package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.QuestionEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.QuestionRepository;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository repo;

    public QuestionService() {
        super();
    }

    // C - Create
    public QuestionEntity postQuestion(QuestionEntity question) {
        return repo.save(question);
    }

    // R - Read
    public List<QuestionEntity> getAllQuestions() {
        return repo.findAll();
    }

    // U - Update
    public QuestionEntity putQuestion(int id, QuestionEntity newDetails) {
        QuestionEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Question " + id + " does not exist!"));
            existing.setQuestionText(newDetails.getQuestionText());
            existing.setOptions(newDetails.getOptions());
            existing.setCorrectAnswer(newDetails.getCorrectAnswer());
            existing.setExplanation(newDetails.getExplanation());
            existing.setQuiz(newDetails.getQuiz());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteQuestion(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Question " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Question " + id + " is successfully deleted!";
    }
}
