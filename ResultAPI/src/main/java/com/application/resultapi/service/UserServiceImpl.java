package com.application.resultapi.service;

import com.application.resultapi.dbdao.UserDao;
import com.application.resultapi.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    private final UserDao userDao;

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User getUser(String id) {
        return this.userDao.getById(id);
    }
}
