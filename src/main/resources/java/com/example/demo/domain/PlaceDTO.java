package com.example.demo.domain;

import lombok.Data;

@Data
public class PlaceDTO {
    private long placeId;    
    private String marker_id;
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
}