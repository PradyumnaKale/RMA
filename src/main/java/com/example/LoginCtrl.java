package com.example;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginCtrl {

	@RequestMapping("/authenticate")
	public Principal authenticate(Principal principal) {
		return principal;
	}

}
