package com.todo.stack.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.stack.model.Todo;
@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCount = 0;
	static {
		todos.add(new Todo(++idCount, "Expert to an Angular", false, new Date()));
		todos.add(new Todo(++idCount, "Expert to AWS Webservice", false, new Date()));
		todos.add(new Todo(++idCount, "Expert to Full-stack Microservice Developer", false, new Date()));
		todos.add(new Todo(++idCount, "Learn to Python", false, new Date()));
		todos.add(new Todo(++idCount, "More practice with Java8 new features", false, new Date()));
	}
	public List<Todo> findAll() {
		return todos;
	}
	
}
