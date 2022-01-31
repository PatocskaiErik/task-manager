package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Task;
import org.springframework.stereotype.Service;

@Service
public interface TaskService {

	public List<Task> getTasks();

	public Task getTask(Long taskId);
	
	public Task addTask(Task task);
	
	public Task updateTask(Task task);
	
	public void deleteTask(Long taskId);
}