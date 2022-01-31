package com.example.demo.servicesImpl;

import java.util.List;

import com.example.demo.entities.Finished;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.FinishedRepository;
import com.example.demo.services.FinishedService;

@Service
public class FinishedServiceImpl implements FinishedService {

    @Autowired
    private FinishedRepository finishedRepository;

    @Override
    public List<Finished> getFinished() {
        return finishedRepository.findAll();
    }

    @Override
    public Finished getFinished(Long finishedId) {
        return finishedRepository.findById(finishedId).get();
    }

    @Override
    public Finished addFinished(Finished finished) {
        return finishedRepository.save(finished);
    }

    @Override
    public Finished updateFinished(Finished finished) {
        return finishedRepository.save(finished);
    }

    @Override
    public void deleteFinished(Long finishedId) {
        Finished finished = finishedRepository.findById(finishedId).get();
        finishedRepository.delete(finished);
    }
}