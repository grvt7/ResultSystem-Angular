package com.application.resultapi.dbdao;

import com.application.resultapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, String> {
}
