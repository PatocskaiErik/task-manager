package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name="partners")
public class Partner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="address")
    private String address;

    @Email
    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phone;

    @OneToMany(mappedBy = "partner")
    private Set<Task> tasks;

    @JsonBackReference
    public Set<Task> getTasks() {
        return tasks;
    }

    public Partner() {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}