package com.csit321g6.luminance.studyquest.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "quiz")
public class QuizEntity {

    /*
    quizId
    title
    totalItems
    difficulty
    createdAt
    topic
    quizType
     */
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "quiz_id")
    private int quizId;

    @Column(name = "title", nullable = false, length = 150)
    private String title;

    @Column(name = "total_items", nullable = false)
    private Integer totalItems;

    @Column(name = "difficulty", length = 20)
    private String difficulty;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "topic_id", nullable = false)
    private TopicEntity topic;

    @ManyToOne
    @JoinColumn(name = "quiz_type_id", nullable = false)
    private QuizTypeEntity quizType;

    // constructor
    public QuizEntity() { super(); }

    // getters and setters
    public int getQuizId() { return quizId; }
    public void setQuizId(int quizId) { this.quizId = quizId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public Integer getTotalItems() { return totalItems; }
    public void setTotalItems(Integer totalItems) { this.totalItems = totalItems; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public TopicEntity getTopic() { return topic; }
    public void setTopic(TopicEntity topic) { this.topic = topic; }

    public QuizTypeEntity getQuizType() { return quizType; }
    public void setQuizType(QuizTypeEntity quizType) { this.quizType = quizType; }

}
