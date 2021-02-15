package com.crystaldata.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crystaldata.entities.Genre;
import com.crystaldata.repositories.GenreRepository;

@Service
public class GenreService {

	@Autowired
	private GenreRepository repository;
	
	public List<Genre> findAll(){
		return repository.findAll();
	}
}
