package com.application.resultapi.dbdao;

import com.application.resultapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDao extends JpaRepository<Student, Long> {
}
