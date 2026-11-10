package com.csit321g6.luminance.studyquest.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_type")
public class QuizTypeEntity {

    /*
    quizTypeId
    name
    description
    */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_type_id")
    private int quizTypeId;

    @Column(name = "name", nullable = false, unique = true, length = 50)
    private String name;

    @Column(name = "description", length = 255)
    private String description;

    // constructor
    public QuizTypeEntity() { super(); }

    // getters and setters
    public int getQuizTypeId() { return quizTypeId; }
    public void setQuizTypeId(int quizTypeId) { this.quizTypeId = quizTypeId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

}
