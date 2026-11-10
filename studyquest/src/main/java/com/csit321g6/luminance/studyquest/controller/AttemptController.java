package com.csit321g6.luminance.studyquest.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.csit321g6.luminance.studyquest.entity.AttemptEntity;
import com.csit321g6.luminance.studyquest.service.AttemptService;

@RestController
@RequestMapping("/attempt/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class AttemptController {

    @Autowired
    AttemptService serv;

    public AttemptController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewAttempt")
    public AttemptEntity postAttempt(@RequestBody AttemptEntity attempt) {
        return serv.postAttempt(attempt);
    }

    // R - Read
    @GetMapping("/getAllAttempts")
    public List<AttemptEntity> getAllAttempts() {
        return serv.getAllAttempts();
    }

    // U - Update
    @PutMapping("/putAttempt")
    public AttemptEntity putAttempt(@RequestParam int id, @RequestBody AttemptEntity newDetails) {
        return serv.putAttempt(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteAttempt/{id}")
    public String deleteAttempt(@PathVariable int id) {
        return serv.deleteAttempt(id);
    }
}
