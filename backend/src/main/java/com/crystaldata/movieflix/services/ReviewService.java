package com.crystaldata.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.crystaldata.movieflix.dto.ReviewDTO;
import com.crystaldata.movieflix.entities.Review;
import com.crystaldata.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll(){
		
		List<Review> list = repository.findAll();
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}
}
