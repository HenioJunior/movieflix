package com.crystaldata.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.crystaldata.movieflix.dto.ReviewDTO;
import com.crystaldata.movieflix.entities.Movie;
import com.crystaldata.movieflix.entities.Review;
import com.crystaldata.movieflix.entities.Role;
import com.crystaldata.movieflix.entities.User;
import com.crystaldata.movieflix.repositories.MovieRepository;
import com.crystaldata.movieflix.repositories.ReviewRepository;
import com.crystaldata.movieflix.services.exceptions.ForbiddenException;
import com.crystaldata.movieflix.services.exceptions.ResourcesNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
			
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll(){
		
		List<Review> list = repository.findAll();
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {

		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new ResourcesNotFoundException("Review not found"));

		return new ReviewDTO(entity);
	}
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		
		Movie movie = movieRepository.getOne(dto.getMovieId());
		User user = authService.authenticated();
				
		for (Role role : user.getRoles()) {
			if (role.getAuthority().equals("ROLE_VISITOR")) {
				throw new ForbiddenException("Access denied");
			}
		}
		Review entity = new Review();
		entity.setText(dto.getText());
		entity.setMovie(movie);
		entity.setUser(user);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
	}
}
