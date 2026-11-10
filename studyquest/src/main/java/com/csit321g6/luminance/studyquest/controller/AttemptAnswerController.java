package com.csit321g6.luminance.studyquest.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.csit321g6.luminance.studyquest.entity.AttemptAnswerEntity;
import com.csit321g6.luminance.studyquest.service.AttemptAnswerService;

@RestController
@RequestMapping("/attemptanswer/api")
// needed for the React front end (CRA = 3000, Vite = 5173)
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class AttemptAnswerController {

    @Autowired
    AttemptAnswerService serv;

    public AttemptAnswerController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewAttemptAnswer")
    public AttemptAnswerEntity postAttemptAnswer(@RequestBody AttemptAnswerEntity attemptanswer) {
        return serv.postAttemptAnswer(attemptanswer);
    }

    // R - Read
    @GetMapping("/getAllAttemptAnswers")
    public List<AttemptAnswerEntity> getAllAttemptAnswers() {
        return serv.getAllAttemptAnswers();
    }

    // U - Update
    @PutMapping("/putAttemptAnswer")
    public AttemptAnswerEntity putAttemptAnswer(@RequestParam int id, @RequestBody AttemptAnswerEntity newDetails) {
        return serv.putAttemptAnswer(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteAttemptAnswer/{id}")
    public String deleteAttemptAnswer(@PathVariable int id) {
        return serv.deleteAttemptAnswer(id);
    }
}
