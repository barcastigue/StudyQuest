package com.csit321g6.luminance.studyquest.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "subject")
public class SubjectEntity {

    /*
    subjectId
    name
    description
    user
     */
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subject_id")
    private int subjectId;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "description", length = 255)
    private String description;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    // constructor
    public SubjectEntity() { super(); }

    // getters and setters
    public int getSubjectId() { return subjectId; }
    public void setSubjectId(int subjectId) { this.subjectId = subjectId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public UserEntity getUser() { return user; }
    public void setUser(UserEntity user) { this.user = user; }

}
