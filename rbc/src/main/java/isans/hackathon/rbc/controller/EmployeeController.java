package isans.hackathon.rbc.controller;

import isans.hackathon.rbc.entity.Employee;
import isans.hackathon.rbc.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employees")
    public String saveEmployee(@RequestBody Employee employee) throws ExecutionException, InterruptedException {
        return employeeService.saveEmployee(employee);
    }

    @PutMapping("/employees/{id}")
    public String updateEmployeeAuthorization(@PathVariable Long id, @RequestBody String newAuthorization) throws ExecutionException, InterruptedException {
        return employeeService.updateAuthorization(id, newAuthorization);
    }
}