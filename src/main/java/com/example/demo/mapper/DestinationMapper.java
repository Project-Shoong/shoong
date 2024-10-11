package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.DestinationDTO;

@Mapper
public interface DestinationMapper {
	List<DestinationDTO> getDestinationByPlanId(long planId);
	List<DestinationDTO> getFirstDestinationByPlanId(long planId);
	int getDestinationCountByPlanId(long planId);
}
