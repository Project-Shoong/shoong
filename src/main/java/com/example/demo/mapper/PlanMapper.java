package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlanDTO;

@Mapper
public interface PlanMapper {
	int insertPlan(PlanDTO plan);
}
