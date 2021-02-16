package com.crystaldata.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.crystaldata.movieflix.dto.MovieDTO;
import com.crystaldata.movieflix.entities.Genre;
import com.crystaldata.movieflix.entities.Movie;
import com.crystaldata.movieflix.repositories.GenreRepository;
import com.crystaldata.movieflix.repositories.MovieRepository;
import com.crystaldata.movieflix.services.exceptions.ResourcesNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository repository;

	@Autowired
	private GenreRepository genreRepository;

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new ResourcesNotFoundException("Movie not found"));
		return new MovieDTO(entity);
	}

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie> list = repository.findAllPaged(genre, pageRequest);
		return list.map(x -> new MovieDTO(x));
	}
}
