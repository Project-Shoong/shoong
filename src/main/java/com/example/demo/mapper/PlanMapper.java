package com.example.demo.mapper;

import java.util.List;
<<<<<<< HEAD

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlanDTO;

@Mapper
public interface PlanMapper {
	List<PlanDTO> getUserPlans(String userId);

	List<PlanDTO> getMyPlanByPlanIds(List<Long> planIds);
	
	void deleteMyPlan(long planId);

	List<Long> getAllPlan();

	long getAllPlanCnt();
=======
import java.util.Map;
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlanDTO;

@Mapper
public interface PlanMapper {
	int insertPlan(PlanDTO plan);
}
