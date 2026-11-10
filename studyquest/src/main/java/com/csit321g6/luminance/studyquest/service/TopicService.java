package com.csit321g6.luminance.studyquest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321g6.luminance.studyquest.entity.TopicEntity;
import com.csit321g6.luminance.studyquest.exception.NameNotFoundException;
import com.csit321g6.luminance.studyquest.repository.TopicRepository;

@Service
public class TopicService {

    @Autowired
    TopicRepository repo;

    public TopicService() {
        super();
    }

    // C - Create
    public TopicEntity postTopic(TopicEntity topic) {
        return repo.save(topic);
    }

    // R - Read
    public List<TopicEntity> getAllTopics() {
        return repo.findAll();
    }

    // U - Update
    public TopicEntity putTopic(int id, TopicEntity newDetails) {
        TopicEntity existing = repo.findById(id)
                .orElseThrow(() -> new NameNotFoundException("Topic " + id + " does not exist!"));
            existing.setName(newDetails.getName());
            existing.setSubject(newDetails.getSubject());
        return repo.save(existing);
    }

    // D - Delete
    public String deleteTopic(int id) {
        if (!repo.existsById(id)) {
            throw new NameNotFoundException("Topic " + id + " does not exist!");
        }
        repo.deleteById(id);
        return "Topic " + id + " is successfully deleted!";
    }
}
