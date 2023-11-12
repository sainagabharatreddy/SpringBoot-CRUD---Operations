package com.example.demo.repository;

import com.example.demo.entity.Crud;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<Crud, Long> {
}
