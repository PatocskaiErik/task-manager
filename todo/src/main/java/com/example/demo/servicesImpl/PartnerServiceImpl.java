package com.example.demo.servicesImpl;

import java.util.List;

import com.example.demo.entities.Partner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.PartnerRepository;
import com.example.demo.services.PartnerService;

@Service
public class PartnerServiceImpl implements PartnerService {

    @Autowired
    private PartnerRepository partnerRepository;

    @Override
    public List<Partner> getPartners() {
        return partnerRepository.findAll();
    }

    @Override
    public Partner getPartner(Long partnerId) {
        return partnerRepository.findById(partnerId).get();
    }

    @Override
    public Partner addPartner(Partner partner) {
        return partnerRepository.save(partner);
    }

    @Override
    public Partner updatePartner(Partner partner) {
        return partnerRepository.save(partner);
    }

    @Override
    public void deletePartner(Long partnerId) {
        Partner partner = partnerRepository.findById(partnerId).get();
        partnerRepository.delete(partner);
    }
}