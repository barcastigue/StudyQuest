package com.csit321g6.luminance.studyquest.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "attempt_answer")
public class AttemptAnswerEntity {

    /*
    attemptAnswerId
    userAnswer
    isCorrect
    attempt
    question
    */
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "attempt_answer_id")
    private int attemptAnswerId;

    @Column(name = "user_answer", length = 255)
    private String userAnswer;

    @Column(name = "is_correct")
    private Boolean isCorrect;

    @ManyToOne
    @JoinColumn(name = "attempt_id", nullable = false)
    private AttemptEntity attempt;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private QuestionEntity question;

    // constructor
    public AttemptAnswerEntity() { super(); }

    // getters and setters
    public int getAttemptAnswerId() { return attemptAnswerId; }
    public void setAttemptAnswerId(int attemptAnswerId) { this.attemptAnswerId = attemptAnswerId; }

    public String getUserAnswer() { return userAnswer; }
    public void setUserAnswer(String userAnswer) { this.userAnswer = userAnswer; }

    public Boolean getIsCorrect() { return isCorrect; }
    public void setIsCorrect(Boolean isCorrect) { this.isCorrect = isCorrect; }

    public AttemptEntity getAttempt() { return attempt; }
    public void setAttempt(AttemptEntity attempt) { this.attempt = attempt; }

    public QuestionEntity getQuestion() { return question; }
    public void setQuestion(QuestionEntity question) { this.question = question; }

}
