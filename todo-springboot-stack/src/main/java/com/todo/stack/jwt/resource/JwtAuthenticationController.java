package com.todo.stack.jwt.resource;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.stack.jwt.JwtTokenUtil;
import com.todo.stack.jwt.JwtUserDetails;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtAuthenticationController {
	@Value("${jwt.http.request.header}")
	private String tokenHeader;
	@Autowired
	private AuthenticationManager authManager;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private UserDetailsService jwtInMemoryUserDetailsService;
	@PostMapping("${jwt.get.token.uri}")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenRequest authRequest)throws AuthenticationException {
		authenticate(authRequest.getUsername(),	authRequest.getPassword());
		final UserDetails userDetails = jwtInMemoryUserDetailsService.loadUserByUsername(authRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtTokenResponse(token));
	}
	@GetMapping("${jwt.refresh.token.uri}")
	public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
		final String token = request.getHeader(tokenHeader).substring(7);
		//String username = jwtTokenUtil.getUsernameFromToken(token);
		//JwtUserDetails user = (JwtUserDetails) jwtInMemoryUserDetailsService.loadUserByUsername(username);
		if(jwtTokenUtil.canTokenBeRefreshed(token)) {
			String refreshedToken = jwtTokenUtil.refreshToken(token);
			return ResponseEntity.ok(new JwtTokenResponse(refreshedToken));
		} else {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@ExceptionHandler({AuthenticationException.class})
	public ResponseEntity<String> handleAuthenticationException(AuthenticationException e) {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
	}
	
	private void authenticate(String username, String password) {
		Objects.requireNonNull(username);
		Objects.requireNonNull(password);
		try {
			authManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch(DisabledException de) {
			throw new AuthenticationException("USER_DISABLED", de);
		} catch(BadCredentialsException bce) {
			throw new AuthenticationException("INVALID_CREDENTIALS", bce);
		}
	}
}
