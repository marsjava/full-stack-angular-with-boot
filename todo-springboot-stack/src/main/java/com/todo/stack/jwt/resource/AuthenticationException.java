package com.todo.stack.jwt.resource;

public class AuthenticationException extends RuntimeException {
	private static final long serialVersionUID = -7469737787763493899L;

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);	
	}
	
}
