package com.example.demo.mapper;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.DefaultDestinationDTO;
import com.example.demo.domain.DestinationDTO;

@Mapper
public interface DestinationMapper {
	int insertDestination(Set<DestinationDTO> destinations, long planId);
	List<Map<String, Object>> getDestinationsByPlanId(long planId);
}
