package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.TopicEntity;
import com.csit321g6.luminance.studyquest.service.TopicService;

@RestController
@RequestMapping("/topic/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class TopicController {

    @Autowired
    TopicService serv;

    public TopicController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewTopic")
    public TopicEntity postTopic(@RequestBody TopicEntity topic) {
        return serv.postTopic(topic);
    }

    // R - Read
    @GetMapping("/getAllTopics")
    public List<TopicEntity> getAllTopics() {
        return serv.getAllTopics();
    }

    // U - Update
    @PutMapping("/putTopic")
    public TopicEntity putTopic(@RequestParam int id, @RequestBody TopicEntity newDetails) {
        return serv.putTopic(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteTopic/{id}")
    public String deleteTopic(@PathVariable int id) {
        return serv.deleteTopic(id);
    }
}
