package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GroupMapper {
	List<Integer> getGroupCount();
	List<String> getGroupLeader();
}

