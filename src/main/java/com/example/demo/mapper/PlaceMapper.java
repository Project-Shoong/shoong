package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlaceMapper {

	List<Long> getMyPlaceByDestIds(List<Long> destIds,List<Long> planIds);

}
