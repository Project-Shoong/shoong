package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.DestinationDTO;
import com.example.demo.domain.PlaceDTO;
import com.example.demo.domain.PlanDTO;
import com.example.demo.mapper.DestinationMapper;
import com.example.demo.mapper.GroupMapper;
import com.example.demo.mapper.LikedPlanMapper;
import com.example.demo.mapper.PlaceMapper;
import com.example.demo.mapper.PlanMapper;

@Service
public class PlanServiceImpl implements PlanService {
	
	@Autowired
	private PlanMapper planMapper;
	@Autowired
	private DestinationMapper destinationMapper;
	@Autowired
	private GroupMapper groupMapper;
	@Autowired
	private PlaceMapper placeMapper;
	@Autowired
	private LikedPlanMapper likedPlanMapper;
	
	
//	@Override
//	public long getPlanTotal() {
//		long total = planMapper.getPlanTotal();
//		return total;
//	}
	
	@Override
	public List<PlanDTO> getPlan() {
		List<PlanDTO> plan = planMapper.getPlan();
		return plan;
	}
	
	@Override
	public List<Integer> getGroupCount() {
	    return groupMapper.getGroupCount();
	}
	
	@Override
	public List<String> getGroupLeader() {
		return groupMapper.getGroupLeader();
	}
	
	@Override
	public List<Integer> getPlanDays() {
		return planMapper.getPlanDays();
	}
	
	@Override
	public List<Integer> getLikedPlanCount() {
	    return likedPlanMapper.getLikedPlanCount();
	}
	
	@Override
    public List<List<DestinationDTO>> getPlansWithDestinations() {
        List<PlanDTO> plan = planMapper.getPlan();

        List<List<DestinationDTO>> destinations = new ArrayList<>();
        
        for (int i = 0; i < plan.size(); i++) {
            if (plan.get(i).getPlanId() == (i + 1)) {
                List<DestinationDTO> destination = getDestination(plan.get(i).getPlanId());
                destinations.add(destination);
            }
        }
        return destinations;
    }
	
	public List<DestinationDTO> getDestination(long planId) {
		return destinationMapper.getDestinationByPlanId(planId);
	}
	
	@Override
    public List<List<PlaceDTO>> getPlansWithPlace() {
        List<PlanDTO> plan = planMapper.getPlan();

        List<List<PlaceDTO>> places = new ArrayList<>();
        
        for (int i = 0; i < plan.size(); i++) {
            if (plan.get(i).getPlanId() == (i + 1)) {
                List<PlaceDTO> place = getPlace(plan.get(i).getPlanId());
                places.add(place);
            }
        }
        return places;
    }
	
	public List<PlaceDTO> getPlace(long planId) {
		return placeMapper.getPlaceByPlanId(planId);
	}

	@Override
	public List<Integer> getLikedPlanByUserId(String userId) {
		return likedPlanMapper.getLikedPlanByUserId(userId);
	}

	@Override
	public long getSharedTotal() {
		return planMapper.getSharedTotal();
	}

	


}




