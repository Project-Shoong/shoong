package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlanDTO;

@Mapper
public interface PlanMapper {
	List<PlanDTO> getPlan();
	List<Integer> getPlanDays();
	long getSharedTotal();
	
}
