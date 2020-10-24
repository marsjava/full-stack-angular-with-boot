package com.todo.stack;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncoderTest {

	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for(int i=1;i<=10;i++)
			System.out.println(encoder.encode("shanmugA#1611"));
	}

}
