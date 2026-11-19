package com.csit321g6.luminance.studyquest.controller;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@org.springframework.web.bind.annotation.RestController
public @interface RestController {

}
