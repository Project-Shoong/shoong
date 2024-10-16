package com.example.demo.domain;

import java.sql.Date;

import lombok.Data;

@Data
public class PlaceDTO {
	 private long placeId;
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
}
