package com.example.demo.service;

<<<<<<< HEAD
public interface PlanService {
=======
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
>>>>>>> 5d88252c551d0340812b9281fed8c26e820fba8b
	
}
