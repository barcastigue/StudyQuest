package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.MilestoneEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.MilestoneRepository;

@Service
public class MilestoneService {

    @Autowired
    MilestoneRepository repo;

    public MilestoneService() {
        super();
    }

    // C - Create
    // method will return the record being added
    public MilestoneEntity postMilestone(MilestoneEntity milestone) {
        return repo.save(milestone);
    }

    // R - Read
    public List<MilestoneEntity> getAllMilestones() {
        return repo.findAll();
    }

    // U - Update
    public MilestoneEntity putMilestone(int id, MilestoneEntity newDetails) {
        MilestoneEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Milestone " + id + " does not exist!"));
            existing.setTitle(newDetails.getTitle());
            existing.setRequiredStreak(newDetails.getRequiredStreak());
            existing.setRequiredLevel(newDetails.getRequiredLevel());
            existing.setAchievedDate(newDetails.getAchievedDate());
            existing.setUser(newDetails.getUser());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteMilestone(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Milestone " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Milestone " + id + " is successfully deleted!";
    }
}
