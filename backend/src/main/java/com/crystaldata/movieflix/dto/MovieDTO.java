package com.crystaldata.movieflix.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.crystaldata.movieflix.entities.Genre;
import com.crystaldata.movieflix.entities.Movie;
import com.crystaldata.movieflix.entities.Review;

public class MovieDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    
	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUrl;
	private String synopsis;
	private Long genreId;
	
	private GenreDTO genre;
		
	private Set<ReviewDTO> reviews = new HashSet<>();
	
	public MovieDTO() {
	}
	
	public MovieDTO(Long id, String title, String subTitle, Integer year, String imgUrl, String synopsis, Long genreId,
			Genre genre) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUrl = imgUrl;
		this.synopsis = synopsis;
		this.genreId = genreId;
		this.genre = new GenreDTO(genre);
	}


	public MovieDTO(Movie entity) {
		id = entity.getId();
		title = entity.getTitle();
		subTitle = entity.getSubTitle();
		year = entity.getYear();
		imgUrl = entity.getImgUrl();
		synopsis = entity.getSynopsis();
		genreId = entity.getGenre().getId();
		genre = new GenreDTO(entity.getGenre());
		
		entity.getReviews().forEach(review -> this.reviews.add(new ReviewDTO(review)));
	}
		
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}
	
	public Long getGenreId() {
		return genreId;
	}

	public void setGenreId(Long genreId) {
		this.genreId = genreId;
	}
		
	public GenreDTO getGenre() {
		return genre;
	}

	public void setGenre(GenreDTO genre) {
		this.genre = genre;
	}

	public Set<ReviewDTO> getReviews() {
		return reviews;
	}
}
