package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
public class HomeController {
	@GetMapping("/")
	public String index(HttpServletRequest req) {
		HttpSession session = req.getSession();
		session.setAttribute("loginUser", "abc123");
		return "index";
	}
}
