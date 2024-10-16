package com.example.demo.mapper;

import java.util.List;
import java.util.Map;
<<<<<<< HEAD

import org.apache.ibatis.annotations.Mapper;

=======
import java.util.Set;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.DefaultDestinationDTO;
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
import com.example.demo.domain.DestinationDTO;

@Mapper
public interface DestinationMapper {
<<<<<<< HEAD

	List<DestinationDTO> getMyDestinationByPlanIds(List<Long> planIds);

	DestinationDTO getMyfirst(long planId);

	List<Long> getMyDestCountByPlanIds(List<Long> planIds);

=======
	int insertDestination(Set<DestinationDTO> destinations, long planId);
	List<Map<String, Object>> getDestinationsByPlanId(long planId);
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
}
