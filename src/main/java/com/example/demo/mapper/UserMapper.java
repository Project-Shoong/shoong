package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.UserDTO;

@Mapper
public interface UserMapper {
	int insertUser(UserDTO user);
	int deleteUser(String userId);
	UserDTO getUserByUserId(String userId);
	int updateUser(UserDTO user);
	
	long getAllUserCnt();
}
