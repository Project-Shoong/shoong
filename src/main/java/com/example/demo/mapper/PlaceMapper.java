package com.example.demo.mapper;

<<<<<<< HEAD
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlaceMapper {

	List<Long> getMyPlaceByDestIds(List<Long> destIds,List<Long> planIds);

=======
import java.util.Set;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlaceDTO;

@Mapper
public interface PlaceMapper {
	int insertPlace(Set<PlaceDTO> places);
	int insertPlaces(PlaceDTO place);
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
}
