package com.application.resultapi.service;

import com.application.resultapi.dbdao.StudentDao;
import com.application.resultapi.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{
    private final StudentDao studentDao;

    public StudentServiceImpl(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @Override
    public List<Student> getStudents() {
        return this.studentDao.findAll();
    }

    @Override
    public Student getStudent(Long rollNumber) {
        return this.studentDao.getById(rollNumber);
    }

    @Override
    public Student addStudent(Student student) {
        return this.studentDao.save(student);
    }

    @Override
    public Student updateStudent(Student student) {
        return this.studentDao.save(student);
    }

    @Override
    public Student deleteStudent(Long rollNumber) {
        Student entity = this.studentDao.getById(rollNumber);
        this.studentDao.delete(entity);
        return entity;
    }
}
