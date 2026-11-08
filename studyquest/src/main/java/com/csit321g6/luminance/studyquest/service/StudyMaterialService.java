package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.StudyMaterialEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.StudyMaterialRepository;

@Service
public class StudyMaterialService {

    @Autowired
    StudyMaterialRepository repo;

    public StudyMaterialService() {
        super();
    }

    // C - Create
    // method will return the record being added
    public StudyMaterialEntity postStudyMaterial(StudyMaterialEntity studymaterial) {
        return repo.save(studymaterial);
    }

    // R - Read
    public List<StudyMaterialEntity> getAllStudyMaterials() {
        return repo.findAll();
    }

    // U - Update
    public StudyMaterialEntity putStudyMaterial(int id, StudyMaterialEntity newDetails) {
        StudyMaterialEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("StudyMaterial " + id + " does not exist!"));
            existing.setFileName(newDetails.getFileName());
            existing.setFileType(newDetails.getFileType());
            existing.setUploadedAt(newDetails.getUploadedAt());
            existing.setSubject(newDetails.getSubject());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteStudyMaterial(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("StudyMaterial " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "StudyMaterial " + id + " is successfully deleted!";
    }
}
