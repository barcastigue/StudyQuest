package com.csit321g6.luminance.studyquest.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "topic")
public class TopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private int topicId;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @ManyToOne
    @JoinColumn(name = "subject_id", nullable = false)
    private SubjectEntity subject;

    // constructor
    public TopicEntity() { super(); }

    // getters and setters
    public int getTopicId() { return topicId; }
    public void setTopicId(int topicId) { this.topicId = topicId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public SubjectEntity getSubject() { return subject; }
    public void setSubject(SubjectEntity subject) { this.subject = subject; }

}
