package com.csit321g6.luminance.studyquest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csit321g6.luminance.studyquest.entity.QuizEntity;

@Repository
public interface QuizRepository extends JpaRepository<QuizEntity, Integer> {
}
