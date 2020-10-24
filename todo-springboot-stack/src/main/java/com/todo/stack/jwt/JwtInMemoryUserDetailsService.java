 package com.todo.stack.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {
	
	static List<JwtUserDetails> inMemoryUserList = new ArrayList<JwtUserDetails>();
	
	static {
		inMemoryUserList.add(new JwtUserDetails(1L, "nginlabs", 
				"$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
		inMemoryUserList.add(new JwtUserDetails(1L, "max", 
				"$2a$10$IetbreuU5KihCkDB6/r1DOJO0VyU91SiBcrMDT.biU7FOt2oqZDPm", "ROLE_USER_2"));
		inMemoryUserList.add(new JwtUserDetails(1L, "mari", 
				"$2a$10$iMlBocJslv/tOs9I6wThoOFpj4uLXzGieLgIN.ltTQmZ603DOkjp.", "ROLE_USER_2"));
		//$2a$10$iMlBocJslv/tOs9I6wThoOFpj4uLXzGieLgIN.ltTQmZ603DOkjp.
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
															 .filter(user -> user.getUsername().equals(username))
															 .findFirst();
		if(!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}
		return findFirst.get();
	}

}
