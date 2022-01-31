package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Partner;
import org.springframework.stereotype.Service;

@Service
public interface PartnerService {

    public List<Partner> getPartners();

    public Partner getPartner(Long partnerId);

    public Partner addPartner(Partner partner);

    public Partner updatePartner(Partner partner);

    public void deletePartner(Long partnerId);
}