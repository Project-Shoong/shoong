package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.GroupDTO;
import com.example.demo.domain.PlanDTO;
import com.example.demo.mapper.GroupMapper;
import com.example.demo.mapper.PlanMapper;

@Service
public class PlanServiceImpl implements PlanService {
	
	@Autowired
	private PlanMapper pmapper;
	
	@Autowired
	private GroupMapper gmapper;
	
	@Override
	public long regist(String userId) {
		PlanDTO plan = new PlanDTO();
		GroupDTO group = new GroupDTO();
		
//		1. 계획 insert
		if(pmapper.insertPlan(plan)==1) {
			System.out.println(plan.getPlanId());
			group.setRule("그룹장");
			group.setPlanId(plan.getPlanId());
			group.setUserId(userId);
//			2. 현재 사용자 그룹장으로 추가
			if(gmapper.insertGroup(group)==1) {
//				3. 해당 계획 ID를 반환하여 ‘계획 세우기’ 열기
				return plan.getPlanId();
			}
		}
		return -1;
//		
	}
}
