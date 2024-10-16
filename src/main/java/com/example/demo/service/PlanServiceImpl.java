package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.CostDTO;
import com.example.demo.domain.DestinationDTO;
import com.example.demo.domain.GroupDTO;
import com.example.demo.domain.PlaceDTO;
import com.example.demo.domain.PlanDTO;
import com.example.demo.mapper.CostMapper;
import com.example.demo.mapper.DestinationMapper;
import com.example.demo.mapper.GroupMapper;
import com.example.demo.mapper.PlaceMapper;
import com.example.demo.mapper.PlanMapper;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PlanServiceImpl implements PlanService {
	
	@Autowired
	private PlanMapper pmapper;
	@Autowired
	private GroupMapper gmapper;
	@Autowired
	private DestinationMapper dmapper; 
	@Autowired
	private PlaceMapper pcmapper;
	@Autowired
	private CostMapper cmapper;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public long regist(Map<String, Object> selectedDefaultDestinations,
			List<String> selectedDestinations,
			Map<String, String> selectedDates,
			Map<String, Object> selectedPlaces,
			Map<String, Object> itineraries,
			Map<String, Object> costs,
			String userId) {
		ObjectMapper objectMapper = new ObjectMapper();
		
		PlanDTO plan = new PlanDTO();
		
		
		// 계획 추가
		plan.setStartDate(selectedDates.get("startDate"));
		plan.setEndDate(selectedDates.get("endDate"));
		if(pmapper.insertPlan(plan)==1) {
			System.out.println("Service : 계획 추가 성공");
			long planId = plan.getPlanId();
			
			// 목적지 추가
			Set<DestinationDTO> destinations = new HashSet<>();
			for(Map.Entry<String, Object> entry : selectedPlaces.entrySet()) {
				Map<String, Object> map = (Map<String, Object>)entry.getValue();
		
				DestinationDTO destination = new DestinationDTO();
				
				destination.setCityKor((String)map.get("city"));
				destination.setCountryKor((String)map.get("country"));
				destination.setCountryCode((String)map.get("countryCode"));
				destination.setContinent((String)map.get("continent"));
				destinations.add(destination);
			}
			if(destinations.size()>0) {
				if(dmapper.insertDestination(destinations, planId)>0) {
					System.out.println("Service : 목적지 추가 성공");
					
//					Map<String, Long> destinationIds = new HashMap<>();
//					for(DestinationDTO destination : destinations) {
//						destinationIds.put(destination.getCityKor(), destination.getDestinationId());
//						System.out.println(destination);
//					}
					
					DestinationMapper dMapper = sqlSession.getMapper(DestinationMapper.class);
					List<Map<String, Object>> destinationsByPlanId = dMapper.getDestinationsByPlanId(planId);
					Map<String, Long> destinationIds = new HashMap<>();
					Map<String, Long> placeIds = new HashMap<>();
					
					System.out.println(destinationsByPlanId);
					
					// destination Id 가져와서 모으기
					for(Map<String, Object> map : destinationsByPlanId) {
						String city = (String)map.get("city_kor");
						Object obj = map.get("destination_id");
						if(obj instanceof Long) {
							System.out.println("이거 Long 맞대");
							Long destinationId = (Long)obj;
							destinationIds.put(city, destinationId);
						}
						else {
							System.out.println("obj는 Long 타입이 아니래");
						}
					}
					
					Set<PlaceDTO> places = new HashSet<>();
					for(Map.Entry<String, Object> entry : itineraries.entrySet()) {
						Map<String, Object> map = (Map<String, Object>)entry.getValue();
						String placeId = (String)map.get("placeId");
						Map<String, Object> selectedPlace = (Map<String, Object>)selectedPlaces.get(placeId);
						
						PlaceDTO place = new PlaceDTO();
						
						String date = (String)map.get("date");
						String startTime = date + " " + (String)map.get("startTime");
						String endTime = date + " " + (String)map.get("endTime");
						
						place.setMarkerId((String)map.get("placeId"));
						place.setName((String)selectedPlace.get("name"));
						place.setAddr((String)selectedPlace.get("addr"));
						place.setLatitude(Double.parseDouble((String)selectedPlace.get("latitude")));  
						place.setLongitude(Double.parseDouble((String)selectedPlace.get("longitude"))); 
						place.setStartTime(startTime);
						place.setEndTime(endTime);
						place.setType((String)selectedPlace.get("type"));
						place.setSystemName((String)selectedPlace.get("photo"));
//						place.setDestinationId(destinationIds.get((String)map.get("city")));
						
						String city = (String)selectedPlace.get("city");
						System.out.println(city);
						Long destinationId = destinationIds.get(city);
						if(destinationId != null) {	
							place.setDestinationId(destinationId); 
						} else {
							System.out.println("destinationId를 찾을 수 없더. 현재 도시는 " + city);
						}
						
						
						if(pcmapper.insertPlaces(place)==1) {
							long pcId = place.getPlaceId();
							System.out.println("Service : 장소 추가 - placeId : "+pcId);
							
							List<CostDTO> costList = new ArrayList<>();
							
							String key = (String)entry.getKey();
							
							for(Map.Entry<String, Object> centry : costs.entrySet()) {
								Map<String, Object> cmap = (Map<String, Object>)centry.getValue();
							
								String itineraryId = (String)cmap.get("itineraryId");
								
								if(key.equals(itineraryId)) {
									
									CostDTO cost = new CostDTO();
									cost.setContent((String)cmap.get("content"));
									cost.setExpectedCost(Integer.parseInt((String)cmap.get("amount")));
									cost.setPayer((String)cmap.get("payer"));
									cost.setPlaceId(pcId);
									
									costList.add(cost);
								}
							}
							if(cmapper.insertCostByPlaceId(costList)>0) {
								System.out.println("Service : 비용 추가 - placeId : "+pcId);
								
								
							} else {
								System.err.println("Service 에러 : 비용 추가 실패 - placeId : "+pcId);
							}
							System.out.println("Service : 계획 등록 모두 완료");
						}
						
//						places.add(place);
					}
					
//					if(places.size()>0) {
//						if(pcmapper.insertPlace(places)>0) {
//							System.out.println("Service : 장소 추가 성공");
//							
//							
//							
//							for(Map.Entry<String, Object> entry : itineraries.entrySet()) {
//							
//							
//							}
//							
//							if(cmapper.insertCost(costs, )>0) {
//								System.out.println("Service : 비용 추가 성공");
//							}
//							
//							
//						}
//						
//					}
					
//					for(Map.Entry<String, Object> entry : selectedPlaces.entrySet()) {
//					Map<String, Object> map = (Map<String, Object>)entry.getValue();
//					
//					PlaceDTO place = new PlaceDTO();
//					
//					place.setMarkerId((String)map.get("id"));
//					place.setName((String)map.get("name"));
//					place.setAddr((String)map.get("addr"));
//					place.setLatitude((Double)map.get("latitude"));
//					place.setLongitude((Double)map.get("longitude"));
//					place.setType((String)map.get("id"));
//					place.setSystemName((String)map.get("id"));
//					place.setOriginName((String)map.get("id"));
//					place.setDestinationId(destinationIds.get((String)map.get("city")));
//					places.add(place);
//				}
				}
			}
			
			GroupDTO group = new GroupDTO();
			group.setUserId(userId);
			group.setPlanId(planId);
			group.setRule("그룹장");
			if(gmapper.insertGroup(group)==1) {
				System.out.println("Service : 그룹 추가 성공");
				return planId;
			}
		}
		return -1;
		
	}
}
