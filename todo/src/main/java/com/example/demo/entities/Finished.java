package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="finisheds")
public class Finished {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn
    private Employee employee;

    @OneToOne
    @JoinColumn
    private Task task;

    @Column(name="time")
    private Integer time;

    @JsonBackReference
    public Task getTask() {
        return task;
    }

    @JsonBackReference
    private Employee getEmployee() {
        return employee;
    }

    public Finished() {
        this.time = time;
        this.employee = employee;
        this.task = task;
    }
}