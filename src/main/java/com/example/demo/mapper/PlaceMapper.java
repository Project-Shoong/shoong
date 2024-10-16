package com.example.demo.mapper;

import java.util.Set;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.PlaceDTO;

@Mapper
public interface PlaceMapper {
	int insertPlace(Set<PlaceDTO> places);
	int insertPlaces(PlaceDTO place);
}
