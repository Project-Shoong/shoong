package com.example.demo.mapper;

import java.util.List;
<<<<<<< HEAD

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.GroupDTO;

@Mapper
public interface GroupMapper {

	List<GroupDTO> getMyGroup(String userId);

	List<Long> getGroupCount(List<Long> planIds);

	void exitMyPlan(String userId, long planId);
	
=======

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.GroupDTO;
import com.example.demo.domain.GroupMemberDTO;

@Mapper
public interface GroupMapper {
	int insertGroup(GroupDTO group);
	List<GroupMemberDTO> getMemberListByPlanId(long planId);
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
}
