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
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCount);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	public Todo deleteById(int id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		if(todos.remove(todo)) return todo;
		return todo;
	}
	public Todo findById(int id) {
		for(Todo todo: todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
}
