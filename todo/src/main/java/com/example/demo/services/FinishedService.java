package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Finished;
import org.springframework.stereotype.Service;

@Service
public interface FinishedService {

    public List<Finished> getFinished();

    public Finished getFinished(Long finishedId);

    public Finished addFinished(Finished finished);

    public Finished updateFinished(Finished finished);

    public void deleteFinished(Long finishedId);
}