package com.crystaldata.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.crystaldata.movieflix.entities.Review;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotBlank(message = "The field cannot be empty")
	private String text;
	private Long movieId;
	private Long userId;
	private String userName;
	private String userEmail;

	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId, String userName, String userEmail) {
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		userId = entity.getUser().getId();
		userName = entity.getUser().getName();
		userEmail = entity.getUser().getEmail();
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

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
}
