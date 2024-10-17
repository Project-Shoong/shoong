package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlaceDTO;

@Mapper
public interface PlaceMapper {
	List<PlaceDTO> getPlaceByPlanId(Long planId);
	List<PlaceDTO> getPlacesByDestinationId(Long planId, Long destinationId);
}
