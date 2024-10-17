package com.example.demo.service;




import java.util.List;
import java.util.Map;

public interface PlanService {
	long regist(Map<String, Object> selectedDefaultDestinations,
				List<String> selectedDestinations,
				Map<String, String> selectedDates,
				Map<String, Object> selectedPlaces,
				Map<String, Object> itineraries,
				Map<String, Object> costs,
				String userId);
	
}
