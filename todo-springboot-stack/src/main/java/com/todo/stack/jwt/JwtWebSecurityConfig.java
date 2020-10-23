package com.todo.stack.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class JwtWebSecurityConfig extends WebSecurityConfigurerAdapter {
	 @Autowired
	 private JwtUnAuthorizedResponseAuthenticationEntryPoint jwtEntryPoint;
	 @Autowired
	 private UserDetailsService jwtInMemoryUserDetailsService;
	 @Autowired
	 private JwtTokenAuthorizationOncePerRequestFilter requestFilter;
	 @Value("${jwt.get.token.uri}")
	 private String authenticationPath;
	 
	 @Autowired
	 public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		 auth.userDetailsService(jwtInMemoryUserDetailsService).passwordEncoder(passwordEncoderBean());
	 }
	 
	 @Bean
	 public PasswordEncoder passwordEncoderBean() {
		 return new BCryptPasswordEncoder();
	 }
	 
	 @Bean
	 @Override
	 public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	 }
	 
	 @Override
	 protected void configure(HttpSecurity http) throws Exception {
		 http.csrf().disable()
		 	 .exceptionHandling()
		 	 .authenticationEntryPoint(jwtEntryPoint)
		 	 .and()
		 	 .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		 	 .and()
		 	 .authorizeRequests().anyRequest().authenticated();
		 http.addFilterBefore(requestFilter, UsernamePasswordAuthenticationFilter.class);
		 http.headers().frameOptions().sameOrigin().cacheControl();
	 }
	 
	 @Override
	 public void configure(WebSecurity web) throws Exception {
		 web.ignoring().antMatchers(HttpMethod.POST, authenticationPath)
		 			   .antMatchers(HttpMethod.OPTIONS, "/**")
		 			   .and().ignoring()
		 			   .antMatchers(HttpMethod.GET, "/")
		 			   .and().ignoring()
		 			   .antMatchers("/h2-console/**/**");
	 }
}
