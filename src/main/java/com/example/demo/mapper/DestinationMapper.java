package com.example.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.DestinationDTO;

@Mapper
public interface DestinationMapper {

	List<DestinationDTO> getMyDestinationByPlanIds(List<Long> planIds);

	DestinationDTO getMyfirst(long planId);

	List<Long> getMyDestCountByPlanIds(List<Long> planIds);

}
