package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.SubjectEntity;
import com.csit321g6.luminance.studyquest.service.SubjectService;

@RestController
@RequestMapping("/subject/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class SubjectController {

    @Autowired
    SubjectService serv;

    public SubjectController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewSubject")
    public SubjectEntity postSubject(@RequestBody SubjectEntity subject) {
        return serv.postSubject(subject);
    }

    // R - Read
    @GetMapping("/getAllSubjects")
    public List<SubjectEntity> getAllSubjects() {
        return serv.getAllSubjects();
    }

    // U - Update
    @PutMapping("/putSubject")
    public SubjectEntity putSubject(@RequestParam int id, @RequestBody SubjectEntity newDetails) {
        return serv.putSubject(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteSubject/{id}")
    public String deleteSubject(@PathVariable int id) {
        return serv.deleteSubject(id);
    }
}
