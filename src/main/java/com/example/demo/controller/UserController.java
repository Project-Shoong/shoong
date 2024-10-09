package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.domain.UserDTO;
import com.example.demo.service.UserService;

@Controller
@RequestMapping("/user/*")
public class UserController {
	
	@Autowired
	UserService service;
	
	@GetMapping("search")
	public String search(String keyword, Model model) {
		List<UserDTO> list = service.getUsersByKeyword(keyword);
		System.out.println(list);
		model.addAttribute("userList", list);
		return "/plan/write :: #userList";
	}
}
