package com.crystaldata.movieflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crystaldata.movieflix.entities.User;

@Repository
public interface  UserRepository extends JpaRepository<User, Long> {
	 
	User findByEmail(String email);
}