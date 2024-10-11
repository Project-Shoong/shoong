package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.DestinationDTO;
import com.example.demo.domain.PlaceDTO;
import com.example.demo.domain.PlanDTO;

@Service
public interface PlanService {
	List<PlanDTO> getPlan();
	List<Integer> getGroupCount();
	List<String> getGroupLeader();
	List<Integer> getPlanDays();
	List<Integer> getLikedPlanCount();
	List<List<DestinationDTO>> getPlansWithDestinations(); 
	List<List<PlaceDTO>> getPlansWithPlace();
	List<Integer> getLikedPlanByUserId(String userId);
	
	long getSharedTotal();
	
}
