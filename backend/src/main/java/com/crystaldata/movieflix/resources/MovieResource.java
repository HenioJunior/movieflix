package com.crystaldata.movieflix.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crystaldata.movieflix.dto.MovieDTO;
import com.crystaldata.movieflix.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieResource {
	
	@Autowired
	private MovieService service;
	
	@GetMapping
	public ResponseEntity <List<MovieDTO>> findAll(){
		List<MovieDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
