package com.application.resultapi.service;

import com.application.resultapi.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getStudents();
    Student getStudent(Long rollNumber);
    Student addStudent(Student student);
    Student updateStudent(Student student);
    Student deleteStudent(Long rollNumber);
}
