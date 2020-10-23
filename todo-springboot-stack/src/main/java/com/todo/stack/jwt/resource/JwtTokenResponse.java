package com.todo.stack.jwt.resource;

import java.io.Serializable;

public class JwtTokenResponse implements Serializable {
	private static final long serialVersionUID = -3169356957116056435L;
	private final String token;
	public JwtTokenResponse(String token) {
		super();
		this.token = token;
	}
	public String getToken() {
		return token;
	}
	
}
