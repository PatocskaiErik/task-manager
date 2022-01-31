package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="finished")
public class Finished {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String name;

    private String emp;

    private String project;

    private String partner;

    private Integer time;

    @ManyToOne
    @JoinColumn
    private Employee employee;

    @OneToOne
    @JoinColumn
    private Task task;

    @JsonBackReference
    public Task getTask() {
        return task;
    }

    public Finished() {
        this.name = name;
        this.time = time;
        this.employee = employee;
        this.task = task;
    }
}