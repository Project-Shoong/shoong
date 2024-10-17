package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.CriteriaJ;
import com.example.demo.domain.PlanDetailsDTO;

public interface PlanService {	
	List<PlanDetailsDTO> getPlans(CriteriaJ criJ, String userId);
	PlanDetailsDTO getPlan(long planId, String userId);
	long getTotal(CriteriaJ criJ);
//	PlanDetailsDTO getPlanDays(long planId, String userId);
}
