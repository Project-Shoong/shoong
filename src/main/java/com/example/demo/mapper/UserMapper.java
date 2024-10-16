package com.example.demo.mapper;

<<<<<<< HEAD
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.multipart.MultipartFile;

=======
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
import com.example.demo.domain.UserDTO;

@Mapper
public interface UserMapper {
<<<<<<< HEAD
	int insertUser(UserDTO user);
	int deleteUser(String userId);
	UserDTO getUserByUserId(String userId);
	int updateUser(UserDTO user);
	
	long getAllUserCnt();
=======
	List<UserDTO> getList(String keyword);
	String getNicknameByUserId(String userId);
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
}
