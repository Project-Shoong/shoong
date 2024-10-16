package com.example.demo.domain;

<<<<<<< HEAD
import java.sql.Date;

import lombok.Data;

@Data
public class PlaceDTO {
	 private long placeId;
	 private String markerId;
	 private String name;
	 private String addr;
	 private double latitude;
	 private double longitude;
	 private Date startTime;
	 private Date endTime;
	 private String type;
	 private String systemName;
	 private String originName;
	 private long destinationId;
=======
import lombok.Data;

@Data
public class PlaceDTO {
	private long placeId;
	private String markerId;
	private String name;
	private String addr;
	private double latitude;
	private double longitude;
	private String startTime;
	private String endTime;
	private String type;
	private String systemName;
	private String originName;
	private long destinationId;
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
}
