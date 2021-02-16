package com.crystaldata.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crystaldata.movieflix.dto.ReviewDTO;
import com.crystaldata.movieflix.services.ReviewService;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewResource {
	
	@Autowired
	private ReviewService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ReviewDTO> findById(@PathVariable Long id) {
		
		ReviewDTO dto = service.findById(id);
		
		return ResponseEntity.ok().body(dto);
	}
	
	
	@GetMapping
	public ResponseEntity <List<ReviewDTO>> findAll(){
		List<ReviewDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
