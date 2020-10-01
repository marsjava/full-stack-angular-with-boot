package com.todo.stack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.stack.model.Hello;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloworldController {
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello world..";
	}
	@GetMapping("/hello-bean")
	public Hello sayHelloBean() {
		return new Hello("Hello, Bean world.. This is subscribed by Angular App.");
//		throw new RuntimeException("Some Error has happened! Contact Support at ***_**");
	}
	@GetMapping("/hello-bean-param/{message}")
	public Hello sayHelloBeanPath(@PathVariable String message) {		
		return new Hello(String.format("Hello %s, Bean word..", message));
	}
}