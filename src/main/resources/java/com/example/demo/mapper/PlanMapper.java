package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.CriteriaJ;
import com.example.demo.domain.PlanDTO;
import com.example.demo.domain.PlanDetailsDTO;

@Mapper
public interface PlanMapper {
	List<PlanDTO> getPlans(CriteriaJ criJ); //전체 계획 불러오기
	List<PlanDTO> getSharedPlans(CriteriaJ criJ); //공유된 계획 불러오기
	long getTotalCount(CriteriaJ criJ); //공유된 계획 총 갯수
	int getDaysCountByPlanId(Long planId); //여행일수
	
	PlanDTO getPlanByPlanId(long planId); //계획 하나 불러오기
}
