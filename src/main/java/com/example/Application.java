package com.example;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Configuration
	@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
	protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {

		@Autowired
		private DataSource dataSource;

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.httpBasic().and()
					.authorizeRequests().antMatchers("/", "/index.html", "/partials/**", "/js/**", "/css/**",
							"/bootstrap-3.3.6-dist/**", "/images/**")
					.permitAll().anyRequest().fullyAuthenticated().and().csrf().disable();
		}

		@Override
		public void configure(AuthenticationManagerBuilder auth) throws Exception {
			auth.jdbcAuthentication().dataSource(this.dataSource);
		}

		/*
		 * @Autowired public void configureGlobal(AuthenticationManagerBuilder
		 * auth) throws Exception {
		 * auth.inMemoryAuthentication().withUser("student").password("student")
		 * .roles("STUDENT").and()
		 * .withUser("bsccs").password("mcc").roles("TEACHER"); }
		 */
	}
}
