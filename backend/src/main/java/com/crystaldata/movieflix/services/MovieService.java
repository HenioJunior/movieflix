package com.crystaldata.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.crystaldata.movieflix.dto.MovieDTO;
import com.crystaldata.movieflix.entities.Movie;
import com.crystaldata.movieflix.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public List<MovieDTO> findAll(){
		
		List<Movie> list = repository.findAll();
		return list.stream().map(x -> new MovieDTO(x)).collect(Collectors.toList());
	}
}
