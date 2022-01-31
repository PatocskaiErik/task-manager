package com.example.demo.controller;

import java.util.List;

import com.example.demo.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.servicesImpl.EmployeeServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {

    @Autowired
    private EmployeeServiceImpl employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(Employee employee) {
        return this.employeeService.getEmployees();
    }

    @GetMapping("/employees/{employeeId}")
    public Employee getEmployeeById(@PathVariable String employeeId) {
        return this.employeeService.getEmployee(Long.parseLong(employeeId));
    }

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        return this.employeeService.addEmployee(employee);
    }

    @PutMapping("/employees/{employeeId}")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return this.employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/employees/{employeeId}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable String employeeId) {
        try {
            this.employeeService.deleteEmployee(Long.parseLong(employeeId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}