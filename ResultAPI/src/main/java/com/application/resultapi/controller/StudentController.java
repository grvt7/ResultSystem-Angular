package com.application.resultapi.controller;

import com.application.resultapi.model.Student;
import com.application.resultapi.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return this.studentService.getStudents();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/students/{rollNumber}")
    public Student getStudent(@PathVariable String rollNumber){
        return this.studentService.getStudent(Long.parseLong(rollNumber));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/students")
    public Student postStudent(@RequestBody Student student){
        return this.studentService.addStudent(student);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/students")
    public Student putStudent(@RequestBody Student student){
        return this.studentService.updateStudent(student);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/students/{rollNumber}")
    public Student deleteStudent(@PathVariable String rollNumber){
        return this.studentService.deleteStudent(Long.parseLong(rollNumber));
    }
}
