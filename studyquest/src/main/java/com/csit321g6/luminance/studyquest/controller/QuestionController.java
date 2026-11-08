package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.QuestionEntity;
import com.csit321g6.luminance.studyquest.service.QuestionService;

@RestController
@RequestMapping("/question/api")
// needed for the React front end (CRA = 3000, Vite = 5173)
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class QuestionController {

    @Autowired
    QuestionService serv;

    public QuestionController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewQuestion")
    public QuestionEntity postQuestion(@RequestBody QuestionEntity question) {
        return serv.postQuestion(question);
    }

    // R - Read
    @GetMapping("/getAllQuestions")
    public List<QuestionEntity> getAllQuestions() {
        return serv.getAllQuestions();
    }

    // U - Update
    @PutMapping("/putQuestion")
    public QuestionEntity putQuestion(@RequestParam int id, @RequestBody QuestionEntity newDetails) {
        return serv.putQuestion(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteQuestion/{id}")
    public String deleteQuestion(@PathVariable int id) {
        return serv.deleteQuestion(id);
    }
}
