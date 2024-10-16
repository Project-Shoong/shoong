package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.domain.ReviewDTO;

@Mapper
public interface ReviewMapper {

	List<ReviewDTO> getmyReview(String userId,int startRow);
	
	long getMyReviewTotal(String userId);

	void deleteMyReview(long reviewId);

	List<ReviewDTO> getTopEight();

	long getAllReviewCnt();

}
