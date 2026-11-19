package com.csit321g6.luminance.studyquest;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.mvc.method.RequestMappingInfo;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

@SpringBootTest
class StudyquestApplicationTests {

	@Autowired
	private RequestMappingHandlerMapping handlerMapping;

	@Test
	void contextLoads() {
	}

	@Test
	void printAuthorEndpointIsRegistered() {
		assertTrue(handlerMapping.getHandlerMethods().keySet().stream()
				.map(RequestMappingInfo::getPatternValues)
				.anyMatch(patterns -> patterns.contains("/user/api/printAuthor")));
	}

}
