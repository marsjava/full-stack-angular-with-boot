package com.todo.stack.jwt;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
@Component
public class JwtUnAuthorizedResponseAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {
	
	private static final long serialVersionUID = -4652799531234147928L;

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, 
				"You would need to provide the Jwt Token to access this resource");
	}

}
