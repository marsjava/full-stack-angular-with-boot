package com.todo.stack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.stack.model.Todo;
import com.todo.stack.service.TodoHardCodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodosController {
	@Autowired
	private TodoHardCodedService todoService;
	
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodoList(@PathVariable String username) {
		return todoService.findAll();
	}
	@DeleteMapping("/users/{username}/todos/{id}")
	public 
}