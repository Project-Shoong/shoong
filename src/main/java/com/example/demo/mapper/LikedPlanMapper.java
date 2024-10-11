package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LikedPlanMapper {
	int insertLikedPlan(long planId, String userId);
	int deleteLikedPlan(long planId, String userId);
	List<Integer> getLikedPlanCount();
	List<Integer> getLikedPlanByUserId(String userId);
}
