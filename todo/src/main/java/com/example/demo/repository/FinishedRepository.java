package com.example.demo.repository;

import com.example.demo.entities.Finished;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinishedRepository extends JpaRepository<Finished, Long> {
}