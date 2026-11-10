package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.QuizTypeEntity;
import com.csit321g6.luminance.studyquest.service.QuizTypeService;

@RestController
@RequestMapping("/quiztype/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class QuizTypeController {

    @Autowired
    QuizTypeService serv;

    public QuizTypeController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewQuizType")
    public QuizTypeEntity postQuizType(@RequestBody QuizTypeEntity quiztype) {
        return serv.postQuizType(quiztype);
    }

    // R - Read
    @GetMapping("/getAllQuizTypes")
    public List<QuizTypeEntity> getAllQuizTypes() {
        return serv.getAllQuizTypes();
    }

    // U - Update
    @PutMapping("/putQuizType")
    public QuizTypeEntity putQuizType(@RequestParam int id, @RequestBody QuizTypeEntity newDetails) {
        return serv.putQuizType(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteQuizType/{id}")
    public String deleteQuizType(@PathVariable int id) {
        return serv.deleteQuizType(id);
    }
}
