package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.MilestoneEntity;
import com.csit321g6.luminance.studyquest.service.MilestoneService;

@RestController
@RequestMapping("/milestone/api")
// needed for the React front end (CRA = 3000, Vite = 5173)
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class MilestoneController {

    @Autowired
    MilestoneService serv;

    public MilestoneController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewMilestone")
    public MilestoneEntity postMilestone(@RequestBody MilestoneEntity milestone) {
        return serv.postMilestone(milestone);
    }

    // R - Read
    @GetMapping("/getAllMilestones")
    public List<MilestoneEntity> getAllMilestones() {
        return serv.getAllMilestones();
    }

    // U - Update
    @PutMapping("/putMilestone")
    public MilestoneEntity putMilestone(@RequestParam int id, @RequestBody MilestoneEntity newDetails) {
        return serv.putMilestone(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteMilestone/{id}")
    public String deleteMilestone(@PathVariable int id) {
        return serv.deleteMilestone(id);
    }
}
