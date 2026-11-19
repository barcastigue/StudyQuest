package com.csit321g6.luminance.studyquest.dto;

import com.csit321g6.luminance.studyquest.entity.UserEntity;

// What the frontend gets back. Deliberately has NO password field.
public record AuthResponse(int userId, String username, String email,
                           int xp, int level, int currentStreak) {

    public static AuthResponse from(UserEntity u) {
        return new AuthResponse(u.getUserId(), u.getUsername(), u.getEmail(),
                u.getXp(), u.getLevel(), u.getCurrentStreak());
    }
}
