package com.csit321g6.luminance.studyquest.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "milestone")
public class MilestoneEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "milestone_id")
    private int milestoneId;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "required_streak")
    private Integer requiredStreak;

    @Column(name = "required_level")
    private Integer requiredLevel;

    @Column(name = "achieved_date")
    private LocalDate achievedDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    // constructor
    public MilestoneEntity() { super(); }

    // getters and setters
    public int getMilestoneId() { return milestoneId; }
    public void setMilestoneId(int milestoneId) { this.milestoneId = milestoneId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public Integer getRequiredStreak() { return requiredStreak; }
    public void setRequiredStreak(Integer requiredStreak) { this.requiredStreak = requiredStreak; }

    public Integer getRequiredLevel() { return requiredLevel; }
    public void setRequiredLevel(Integer requiredLevel) { this.requiredLevel = requiredLevel; }

    public LocalDate getAchievedDate() { return achievedDate; }
    public void setAchievedDate(LocalDate achievedDate) { this.achievedDate = achievedDate; }

    public UserEntity getUser() { return user; }
    public void setUser(UserEntity user) { this.user = user; }

}
