package com.todo.stack.model;

import java.util.Date;

public class Todo {
	private int id;
	private String description;
	private boolean done;
	private Date targetDate;
	
	public Todo(int id, String description, boolean done, Date targetDate) {
		this.id = id;
		this.description = description;
		this.done = done;
		this.targetDate = targetDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	
}
