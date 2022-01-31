package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Employee;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {

    public List<Employee> getEmployees();

    public Employee getEmployee(Long employeeId);

    public Employee addEmployee(Employee employee);

    public Employee updateEmployee(Employee employee);

    public void deleteEmployee(Long employeeId);
}