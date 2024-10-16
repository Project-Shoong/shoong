package com.example.demo.service;

import java.util.List;
<<<<<<< HEAD
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.CommentDTO;
import com.example.demo.domain.UserDTO;

public interface UserService {
	boolean join(UserDTO user);
	boolean login(String userId, String password);
	boolean checkId(String userId);
	UserDTO getUserByUserId(String userId);
	boolean deleteUser(String userId);
	boolean updateUser(UserDTO user, MultipartFile profileImage);
	
	List<List<Object>> getMyReview(String userId,Integer pagenum);
	long getMyReviewTotal(String userId);	
	void deleteMyReview(long reviewId);
	List<CommentDTO> getMyComment(String userId, Integer pagenum);
	long getMyCommentTotal(String userId);
	void deleteMycomment(long commentId);
	List<Map<String, Object>> getMyPlan(String userId);
	void deleteMyPlan(long planId);
	void exitMyPlan(String userId, long planId);
	
=======

import com.example.demo.domain.UserDTO;

public interface UserService {
	List<UserDTO> getUsersByKeyword(String keyword);
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
}
 