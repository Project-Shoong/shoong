package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/oauth2/*")
public class OauthController {

	//redirectURL: http://localhost:8080/oauth2/kakao
	
	@Value("${kakao.client.id}")
	private String kakaoClientId;
	
	@Value("${kakao.redirect.uri}")
	private String kakaoRedirectUri;
	
//	카카오 로그인 redirect url
	//파라미터로 code라는 반환값을 받아서 Access Code를 확인한다. 
	@GetMapping("login")
	public String login(Model model) {
		String kakaoLoginUrl = "https://kauth.kakao.com/oauth/authorize?client_id=" + kakaoClientId + 
				"&redirect_uri=" + kakaoRedirectUri + 
				"&response_type=code";
		
		model.addAttribute("kakaoLoginUrl", kakaoLoginUrl);
		
		return "user/login";
	}
	
	@GetMapping("kakao")
	private String kakaoCallback(@RequestParam("code") String code) {
		return "redirect:/";
	}
}

