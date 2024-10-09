package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.UserDTO;
import com.example.demo.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserMapper umapper;
	
	@Override
	public List<UserDTO> getUsersByKeyword(String keyword) {
		List<UserDTO> list = umapper.getList(keyword);
		return list;
	}
}
