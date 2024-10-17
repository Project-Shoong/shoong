package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.domain.CriteriaJ;
import com.example.demo.domain.PageDTO;
import com.example.demo.domain.PlanDetailsDTO;
import com.example.demo.service.PlanService;


@Controller
@RequestMapping("/plan/*")
public class PlanController {
	
    @Autowired
    private PlanService service;

    @GetMapping("list")
    public String getPlanList(CriteriaJ criJ, Model model) {
    	String userId = "abc123";
    	List<PlanDetailsDTO> planLists = service.getPlans(criJ, userId);
    	
        model.addAttribute("planLists", planLists);
        model.addAttribute("pageMaker",new PageDTO(service.getTotal(criJ), criJ));

        return "plan/list";
    }

    
    @GetMapping("get")
    public String getPlanView(@RequestParam("planId") Long planId, Model model) {
    	String userId = "abc123";
    	System.out.println("planId : " + planId);
    	
    	PlanDetailsDTO planList = service.getPlan(planId, userId);
    	model.addAttribute("planList", planList);
    	
        return "plan/get";
    }
    
    
    
}
