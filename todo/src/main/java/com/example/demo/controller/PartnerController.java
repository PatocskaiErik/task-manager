package com.example.demo.controller;

import java.util.List;

import com.example.demo.entities.Partner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.servicesImpl.PartnerServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PartnerController {

    @Autowired
    private PartnerServiceImpl partnerService;

    @GetMapping("/partners")
    public List<Partner> getAllPartners(Partner partner) {
        return this.partnerService.getPartners();
    }

    @GetMapping("/partners/{partnerId}")
    public Partner getPartnerById(@PathVariable String partnerId) {
        return this.partnerService.getPartner(Long.parseLong(partnerId));
    }

    @PostMapping("/partners")
    public Partner addPartner(@RequestBody Partner partner) {
        return this.partnerService.addPartner(partner);
    }

    @PutMapping("/partners/{partnerId}")
    public Partner updatePartner(@RequestBody Partner partner) {
        return this.partnerService.updatePartner(partner);
    }

    @DeleteMapping("/partners/{partnerId}")
    public ResponseEntity<HttpStatus> deletePartner(@PathVariable String partnerId) {
        try {
            this.partnerService.deletePartner(Long.parseLong(partnerId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}