package com.example.demo.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.GroupDTO;
import com.example.demo.domain.GroupMemberDTO;
import com.example.demo.mapper.GroupMapper;
import com.example.demo.mapper.UserMapper;

@Service
public class GroupServiceImpl implements GroupService {

	@Autowired
	GroupMapper gmapper;
	
	@Autowired
	UserMapper umapper;
	
	@Override
	public List<GroupMemberDTO> getList(long planId) {
		List<GroupMemberDTO> list = gmapper.getMemberListByPlanId(planId);
		return list;
	}
	
	@Override
	public int request(long planId, String userId) {
		GroupDTO group = new GroupDTO();
		group.setPlanId(planId);
		group.setUserId(userId);
		group.setRule("요청됨");
		if(gmapper.insertGroup(group)==1) {
			return 1;
		}
		return 0;
	}
}
