package com.example.demo.controller;

import java.util.List;

import com.example.demo.entities.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.servicesImpl.TaskServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaskController {

	@Autowired
	private TaskServiceImpl taskService;

	@GetMapping("/tasks")
	public List<Task> getAllTasks(Task task) {
		return this.taskService.getTasks();
	}
	
	@GetMapping("/tasks/{taskId}")
	public Task getTaskById(@PathVariable String taskId) {
		return this.taskService.getTask(Long.parseLong(taskId));
	}
	
	@PostMapping("/tasks")
	public Task addTask(@RequestBody Task task) {
		return this.taskService.addTask(task);
	}
	
	@PutMapping("/tasks/{taskId}")
	public Task updateTask(@RequestBody Task task) {
		return this.taskService.updateTask(task);
	}
	
	@DeleteMapping("/tasks/{taskId}")
	public ResponseEntity<HttpStatus> deleteTask(@PathVariable String taskId) {
		try {
			this.taskService.deleteTask(Long.parseLong(taskId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}