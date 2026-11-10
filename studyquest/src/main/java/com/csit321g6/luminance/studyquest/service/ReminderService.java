package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.ReminderEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.ReminderRepository;

@Service
public class ReminderService {

    @Autowired
    ReminderRepository repo;

    public ReminderService() {
        super();
    }

    // C - Create
    public ReminderEntity postReminder(ReminderEntity reminder) {
        return repo.save(reminder);
    }

    // R - Read
    public List<ReminderEntity> getAllReminders() {
        return repo.findAll();
    }

    // U - Update
    public ReminderEntity putReminder(int id, ReminderEntity newDetails) {
        ReminderEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Reminder " + id + " does not exist!"));
            existing.setMessage(newDetails.getMessage());
            existing.setRemindAt(newDetails.getRemindAt());
            existing.setIsDone(newDetails.getIsDone());
            existing.setUser(newDetails.getUser());
            existing.setSubject(newDetails.getSubject());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteReminder(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Reminder " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Reminder " + id + " is successfully deleted!";
    }
}
