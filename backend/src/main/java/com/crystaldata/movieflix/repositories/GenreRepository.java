package com.crystaldata.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crystaldata.movieflix.entities.Genre;

@Repository
public interface  GenreRepository extends JpaRepository<Genre, Long> {

}