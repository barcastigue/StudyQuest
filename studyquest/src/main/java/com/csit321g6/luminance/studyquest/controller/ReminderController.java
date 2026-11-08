package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.ReminderEntity;
import com.csit321g6.luminance.studyquest.service.ReminderService;

@RestController
@RequestMapping("/reminder/api")
// needed for the React front end (CRA = 3000, Vite = 5173)
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class ReminderController {

    @Autowired
    ReminderService serv;

    public ReminderController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewReminder")
    public ReminderEntity postReminder(@RequestBody ReminderEntity reminder) {
        return serv.postReminder(reminder);
    }

    // R - Read
    @GetMapping("/getAllReminders")
    public List<ReminderEntity> getAllReminders() {
        return serv.getAllReminders();
    }

    // U - Update
    @PutMapping("/putReminder")
    public ReminderEntity putReminder(@RequestParam int id, @RequestBody ReminderEntity newDetails) {
        return serv.putReminder(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteReminder/{id}")
    public String deleteReminder(@PathVariable int id) {
        return serv.deleteReminder(id);
    }
}
