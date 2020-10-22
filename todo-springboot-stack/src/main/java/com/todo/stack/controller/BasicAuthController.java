package com.todo.stack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.stack.model.AuthenticationBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {
	@GetMapping("/basicauth")
	public AuthenticationBean connectAuthBean() {
		return new AuthenticationBean("You are authenticated.");
	}
}
