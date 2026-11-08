package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.SubjectEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.SubjectRepository;

@Service
public class SubjectService {

    @Autowired
    SubjectRepository repo;

    public SubjectService() {
        super();
    }

    // C - Create
    // method will return the record being added
    public SubjectEntity postSubject(SubjectEntity subject) {
        return repo.save(subject);
    }

    // R - Read
    public List<SubjectEntity> getAllSubjects() {
        return repo.findAll();
    }

    // U - Update
    public SubjectEntity putSubject(int id, SubjectEntity newDetails) {
        SubjectEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Subject " + id + " does not exist!"));
            existing.setName(newDetails.getName());
            existing.setDescription(newDetails.getDescription());
            existing.setUser(newDetails.getUser());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteSubject(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Subject " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Subject " + id + " is successfully deleted!";
    }
}
