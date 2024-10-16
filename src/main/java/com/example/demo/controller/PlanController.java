package com.example.demo.controller;

import java.net.http.HttpRequest;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.domain.DefaultDestinationDTO;
import com.example.demo.service.PlanService;
import com.fasterxml.jackson.databind.JsonNode;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/plan/*")
public class PlanController {
	
	@Autowired
	private PlanService service;
	
	@GetMapping("write")
	public String write(HttpServletRequest req, HttpServletResponse resp, RedirectAttributes attributes) {
		HttpSession session = req.getSession();
		String userId = (String)session.getAttribute("loginUser");
//		로그인 확인 여부
		if(userId!=null) {
			return "/plan/write";
		}
		else {
			Cookie cookie = new Cookie("isLogined", "false");
			cookie.setPath("/");
			cookie.setMaxAge(60);
			resp.addCookie(cookie);
		}
		return "/user/login";
	}
	
	@PostMapping("write")
	public void write(@RequestBody Map<String, Object> data, HttpServletRequest req, HttpServletResponse resp)
	{
		HttpSession session = req.getSession();
		
		Map<String, Object> selectedDefaultDestinations = (Map<String, Object>) data.get("selectedDefaultDestinations");
		List<String> selectedDestinations = (List<String>)data.get("selectedDestinations");
		Map<String, String> selectedDates = (Map<String, String>) data.get("selectedDates");
		Map<String, Object> selectedPlaces = (Map<String, Object>) data.get("selectedPlaces");
		Map<String, Object> itineraries = (Map<String, Object>) data.get("itineraries");
		Map<String, Object> costs = (Map<String, Object>) data.get("costs");
		
		String userId = (String) session.getAttribute("loginUser");
		
		
		if(service.regist(selectedDefaultDestinations,selectedDestinations, selectedDates, selectedPlaces, itineraries, costs, userId) != -1) {
			System.out.println("===========================");
			System.out.println("Controller : 게시글 등록 성공!");
			
			Cookie cookie = new Cookie("hasRegisted", "true");
			cookie.setPath("/");
			cookie.setMaxAge(5);
			resp.addCookie(cookie);
		}
		
		
		
		
		
		
		
		
		
		
		for (Map.Entry<String, Object> entry : selectedDefaultDestinations.entrySet()) {
			System.out.print("selectedDefaultDestinations : ");
		    System.out.println(entry.getKey() + ": " + entry.getValue());
		}
		for (String entry : selectedDestinations) {
			System.out.print("selectedDestinations : ");
			System.out.println(entry);
		}
		for (Map.Entry<String, String> entry : selectedDates.entrySet()) {
			System.out.print("selectedDates : ");
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
		for (Map.Entry<String, Object> entry : selectedPlaces.entrySet()) {
			System.out.print("selectedPlaces : ");
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
		for (Map.Entry<String, Object> entry : itineraries.entrySet()) {
			System.out.print("itineraries : ");
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
		for (Map.Entry<String, Object> entry : costs.entrySet()) {
			System.out.print("costs : ");
			System.out.println(entry.getKey() + ": " + entry.getValue());
		}
	}	
}
