package com.todo.stack.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {
	private static final long serialVersionUID = 5480638592722328267L;
	private String username;
	private String password;
	public JwtTokenRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public JwtTokenRequest(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}	
}
