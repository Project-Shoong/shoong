package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.GroupDTO;

@Mapper
public interface GroupMapper {
    List<GroupDTO> getGroupByPlanId(Long planId);
}
