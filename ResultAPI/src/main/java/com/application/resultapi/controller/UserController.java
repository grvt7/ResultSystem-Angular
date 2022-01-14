package com.application.resultapi.controller;

import com.application.resultapi.model.User;
import com.application.resultapi.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable String id){
        return this.userService.getUser(id);
    }
}
