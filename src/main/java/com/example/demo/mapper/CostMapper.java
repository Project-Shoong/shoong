package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.CostDTO;

@Mapper
public interface CostMapper {
	List<CostDTO> getCostByPlanId(Long planId);
}
