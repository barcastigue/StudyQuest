package com.csit321g6.luminance.studyquest.exception;

public class NameErrorResponse {
    private int status;
    private String message;
    private long timestamp;

    public NameErrorResponse() { super(); }

    public int getStatus() { return status; }
    public void setStatus(int status) { this.status = status; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public long getTimestamp() { return timestamp; }
    public void setTimestamp(long timestamp) { this.timestamp = timestamp; }
}
