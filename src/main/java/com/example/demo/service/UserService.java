package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.UserDTO;

public interface UserService {
	List<UserDTO> getUsersByKeyword(String keyword);
}
