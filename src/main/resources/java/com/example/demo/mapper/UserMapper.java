package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.UserDTO;

@Mapper
public interface UserMapper {
	List<UserDTO> getUserByPlanId(Long planId);
	String getLeaderNickByPlanId(Long planId);
}
