package com.example.demo.service;

import java.util.List;
import java.util.Map;

import com.example.demo.domain.CriteriaJ;
import com.example.demo.domain.PlanDetailsDTO;

public interface PlanService {
	long regist(Map<String, Object> selectedDefaultDestinations,
				List<String> selectedDestinations,
				Map<String, String> selectedDates,
				Map<String, Object> selectedPlaces,
				Map<String, Object> itineraries,
				Map<String, Object> costs,
				String userId);
	
	List<PlanDetailsDTO> getPlans(CriteriaJ criJ, String userId);
	PlanDetailsDTO getPlan(long planId, String userId);
	long getTotal(CriteriaJ criJ);
//	PlanDetailsDTO getPlanDays(long planId, String userId);
}
