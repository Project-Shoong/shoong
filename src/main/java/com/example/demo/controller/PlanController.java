package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.domain.DestinationDTO;
import com.example.demo.domain.PageDTO;
import com.example.demo.domain.PlaceDTO;
import com.example.demo.domain.PlanDTO;
import com.example.demo.domain.UserDTO;
import com.example.demo.service.LikedPlanService;
import com.example.demo.service.PlanService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/plan/*")
public class PlanController {
	
	@Autowired
	private PlanService service;
	@Autowired
	private LikedPlanService likedPlanService;
	
	
	@GetMapping("list")
	public void list(Model model) {
	    List<PlanDTO> planList = service.getPlan();
	    List<Integer> groupCountList = service.getGroupCount();
	    List<String> groupLeaderList = service.getGroupLeader();
	    List<Integer> planDaysList = service.getPlanDays();
	    List<Integer> likedPlanCountList = service.getLikedPlanCount();
	    List<List<DestinationDTO>> destinationLists = service.getPlansWithDestinations();
	    List<List<PlaceDTO>> placeLists = service.getPlansWithPlace();
	    
	    String userId = "abc123";
		List<Integer> getLikedPlanByUserIdList = service.getLikedPlanByUserId(userId);
			    
	    List<Map<String, Object>> planWithDestinations = new ArrayList<>();
	    for (int i = 0; i < planList.size(); i++) {
	        Map<String, Object> planData = new HashMap<>();
	        planData.put("plan", planList.get(i));
	        planData.put("groupCount", groupCountList.get(i));
	        planData.put("groupLeader", groupLeaderList.get(i));
	        planData.put("planDays", planDaysList.get(i));
	        planData.put("likedPlanCount", likedPlanCountList.get(i));
	        planData.put("destinations", destinationLists.get(i));
	        planData.put("places", placeLists.get(i));
	        planData.put("getLikedPlanByUserId", getLikedPlanByUserIdList.get(i));
	        planWithDestinations.add(planData);
	    }
	    
	    model.addAttribute("planWithDestinations", planWithDestinations);
	    model.addAttribute("pageMaker",new PageDTO(service.getSharedTotal(), 2));
	    
	}
	
	@PostMapping("likedPlan")
	@ResponseBody
	public void likedPlan(@RequestParam("planId") long planId, @RequestParam("likedCheck") int likedCheck, Model model, HttpServletRequest req) {
//      임시아이디 입력
	    String userId = "abc123";
//      session 부여
//	    HttpSession session = req.getSession();
	    
	    //빈 하트를 클릭했을 때 (좋아요 생성)
	    if(likedCheck == 1) {
	    	//좋아요 목록에 넣기
		    likedPlanService.insert(planId, userId);
		    System.out.println(likedCheck);
	    }
	    //채워진 하트를 클릭했을 때 (좋아요 취소)
	    else if(likedCheck == 0){
	    	//좋아요 목록에서 빼기
	    	likedPlanService.delete(planId, userId);
	    	System.out.println(likedCheck);
	    }
	}

		
}
