package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.QuizEntity;
import com.csit321g6.luminance.studyquest.service.QuizService;

@RestController
@RequestMapping("/quiz/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class QuizController {

    @Autowired
    QuizService serv;

    public QuizController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewQuiz")
    public QuizEntity postQuiz(@RequestBody QuizEntity quiz) {
        return serv.postQuiz(quiz);
    }

    // R - Read
    @GetMapping("/getAllQuizzes")
    public List<QuizEntity> getAllQuizzes() {
        return serv.getAllQuizzes();
    }

    // U - Update
    @PutMapping("/putQuiz")
    public QuizEntity putQuiz(@RequestParam int id, @RequestBody QuizEntity newDetails) {
        return serv.putQuiz(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteQuiz/{id}")
    public String deleteQuiz(@PathVariable int id) {
        return serv.deleteQuiz(id);
    }
}
