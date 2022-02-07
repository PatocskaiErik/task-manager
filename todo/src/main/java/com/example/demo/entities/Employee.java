package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name="employees")
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="post")
    private String post;

    @Email
    @Column(name="email")
    private String email;

    @Column(name="phone")
    private String phoneNumber;

    @OneToMany(mappedBy = "employee")
    private Set<Finished> finished;

    @JsonBackReference
    public Set<Finished> getFinished() {
        return finished;
    }

    public Employee() {
        this.name = name;
        this.post = post;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.finished = finished;
    }
}