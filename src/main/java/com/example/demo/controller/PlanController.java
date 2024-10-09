package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.service.PlanService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/plan/*")
public class PlanController {
	
	@Autowired
	private PlanService service;
	
	@GetMapping("regist")
	public String regist(HttpServletRequest req, HttpServletResponse resp, RedirectAttributes attributes) {
		HttpSession session = req.getSession();
		String userId = (String)session.getAttribute("loginUser");
//		로그인 확인 여부
		if(userId!=null) {
			long planId = service.regist(userId);
//			계획 등록 여부
			if(planId != -1) {
				attributes.addFlashAttribute("planId", planId+"");
				return "redirect:/plan/write";
			}
			else {
				Cookie cookie = new Cookie("isRegisted", "false");
				cookie.setPath("/");
				cookie.setMaxAge(60);
				resp.addCookie(cookie);
			}
		}
		else {
			Cookie cookie = new Cookie("hasLogined", "false");
			cookie.setPath("/");
			cookie.setMaxAge(60);
			resp.addCookie(cookie);
		}
		return "/";
	}
	
	@GetMapping("write")
	public void write(Model model) {
	}
}
