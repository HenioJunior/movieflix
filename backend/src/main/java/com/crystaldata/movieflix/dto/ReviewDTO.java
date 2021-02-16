package com.crystaldata.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.crystaldata.movieflix.entities.Movie;
import com.crystaldata.movieflix.entities.Review;
import com.crystaldata.movieflix.entities.User;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	@NotBlank(message = "The field cannot be empty")
	private String text;
	private String userName;
	private Long userId;
	private Long movieId;
	
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, @NotBlank(message = "The field cannot be empty") String text, String userName, Long userId, Long movieId) {
		this.id = id;
		this.text = text;
		this.userName = userName;
		this.userId = userId;
		this.movieId = movieId;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		userName = entity.getUser().getName();
		userId = entity.getUser().getId();
		movieId = entity.getMovie().getId();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
			
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public void setMovieId(long l) {
		// TODO Auto-generated method stub
		
	}
}
