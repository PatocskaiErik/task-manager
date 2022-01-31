package com.example.demo.servicesImpl;

import java.util.List;

import com.example.demo.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.TaskRepository;
import com.example.demo.services.TaskService;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskRepository taskRepository;
	
	@Override
	public List<Task> getTasks() {
		return taskRepository.findAll();
	}

	@Override
	public Task getTask(Long taskId) {
		return taskRepository.findById(taskId).get();
	}

	@Override
	public Task addTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public Task updateTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public void deleteTask(Long taskId) {
		Task task = taskRepository.findById(taskId).get();
		taskRepository.delete(task);
	}
}