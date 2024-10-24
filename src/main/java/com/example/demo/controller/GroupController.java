package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.domain.GroupDTO;
import com.example.demo.domain.GroupMemberDTO;
import com.example.demo.service.GroupService;


@Controller
@RequestMapping("/group/*")
public class GroupController {

	@Autowired
	GroupService service;
	
	@GetMapping("list")
	public String list(String planId, Model model) {
		List<GroupMemberDTO> list = service.getList(Long.parseLong(planId));
		model.addAttribute("groupMemberList", list);
		return "/plan/write :: #groupMemberList";
	}
	
	@PostMapping("invite")
	public ResponseEntity<String> invite(@RequestBody Map<String, Object> data) {
		long planId = ((Integer)data.get("planId")).longValue();
		String userId = (String)data.get("userId");
		if(service.request(planId, userId)==1) {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
