package com.csit321g6.luminance.studyquest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321g6.luminance.studyquest.entity.StudyMaterialEntity;
import com.csit321g6.luminance.studyquest.service.StudyMaterialService;

@RestController
@RequestMapping("/studymaterial/api")
// needed for the React front end (CRA = 3000, Vite = 5173)
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"})
public class StudyMaterialController {

    @Autowired
    StudyMaterialService serv;

    public StudyMaterialController() {
        super();
    }

    @GetMapping("/printAuthor")
    public String printAuthor() {
        return "Team Luminance - Bogoy, Barcastigue, Empeynado";
    }

    // C - Create
    @PostMapping("/postNewStudyMaterial")
    public StudyMaterialEntity postStudyMaterial(@RequestBody StudyMaterialEntity studymaterial) {
        return serv.postStudyMaterial(studymaterial);
    }

    // R - Read
    @GetMapping("/getAllStudyMaterials")
    public List<StudyMaterialEntity> getAllStudyMaterials() {
        return serv.getAllStudyMaterials();
    }

    // U - Update
    @PutMapping("/putStudyMaterial")
    public StudyMaterialEntity putStudyMaterial(@RequestParam int id, @RequestBody StudyMaterialEntity newDetails) {
        return serv.putStudyMaterial(id, newDetails);
    }

    // D - Delete
    @DeleteMapping("/deleteStudyMaterial/{id}")
    public String deleteStudyMaterial(@PathVariable int id) {
        return serv.deleteStudyMaterial(id);
    }
}
