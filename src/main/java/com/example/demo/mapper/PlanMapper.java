package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlanDTO;

@Mapper
public interface PlanMapper {
	List<PlanDTO> getUserPlans(String userId);

	List<PlanDTO> getMyPlanByPlanIds(List<Long> planIds);
	
	void deleteMyPlan(long planId);

	List<Long> getAllPlan();

	long getAllPlanCnt();

}
