package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@Table(name="tasks")
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name="name")
	private String name;

	@Column(name="description")
	private String description;

	@ManyToOne
	@JoinColumn
	private Partner partner;

	@OneToOne(mappedBy = "task")
	private Finished finished;

	@JsonBackReference
	public Partner getPartner() {
		return partner;
	}

	public Task() {
		this.name = name;
		this.description = description;
		this.partner = partner;
		this.finished = finished;
	}
}