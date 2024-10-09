package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.GroupDTO;
import com.example.demo.domain.GroupMemberDTO;

@Mapper
public interface GroupMapper {
	int insertGroup(@Param("group") GroupDTO group);
	List<GroupMemberDTO> getMemberListByPlanId(long planId);
}
