package com.example.demo.controller;

import java.util.List;

import com.example.demo.entities.Finished;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.servicesImpl.FinishedServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FinishedController {

    @Autowired
    private FinishedServiceImpl finishedService;

    @GetMapping("/finished")
    public List<Finished> getAllFinished(Finished finished) {
        return this.finishedService.getFinished();
    }

    @GetMapping("/finished/{finishedId}")
    public Finished getFinishedById(@PathVariable String finishedId) {
        return this.finishedService.getFinished(Long.parseLong(finishedId));
    }

    @PostMapping("/finished")
    public Finished addFinished(@RequestBody Finished finished) {
        return this.finishedService.addFinished(finished);
    }

    @PutMapping("/finished/{finishedId}")
    public Finished updateFinished(@RequestBody Finished finished) {
        return this.finishedService.updateFinished(finished);
    }

    @DeleteMapping("/finished/{finishedId}")
    public ResponseEntity<HttpStatus> deleteFinished(@PathVariable String finishedId) {
        try {
            this.finishedService.deleteFinished(Long.parseLong(finishedId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}