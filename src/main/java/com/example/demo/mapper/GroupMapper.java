package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.domain.GroupDTO;

@Mapper
public interface GroupMapper {
	int insertGroup(@Param("group") GroupDTO group);
}
