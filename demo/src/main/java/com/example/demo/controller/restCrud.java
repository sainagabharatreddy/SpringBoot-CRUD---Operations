package com.example.demo.controller;

import com.example.demo.entity.Crud;
import com.example.demo.repository.userRepo;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.util.Optional;


@RestController
@Configuration
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})

public class restCrud {

    @Autowired
    private userRepo  userRepo;


    @PostMapping("/users")
    public Crud saveUsers(@RequestBody Crud newData){

        return userRepo.save(newData);
    }
    @DeleteMapping("/deleteUser/{id}")
    public String delete(@PathVariable Long id){

         userRepo.deleteById(id);

         return " user  of this " +id+ "has been deleted";
    }
    @GetMapping("/getUsers")
    public List<Crud> getAllUsers(){
        List<Crud> data = userRepo.findAll();

        return data;
    }

    @GetMapping("/users/{id}")
    public Optional<Crud> getUserById(@PathVariable Long id)
    {
       return  userRepo.findById(id);
    }

    @PostMapping("/user/{id}")
    public Crud editUser(@RequestBody Crud newData , @PathVariable Long id){

       return  userRepo.findById(id)
               .map(user -> {
                   user.setName(newData.getName());
                   user.setUsername(newData.getUsername());
                   user.setEmail(newData.getEmail());

                   return userRepo.save(user);
               })
               .orElse(null);

    }


}
