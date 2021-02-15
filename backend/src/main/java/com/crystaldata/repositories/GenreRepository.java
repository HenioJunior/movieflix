package com.crystaldata.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crystaldata.entities.Genre;

@Repository
public interface  GenreRepository extends JpaRepository<Genre, Long> {
	
}