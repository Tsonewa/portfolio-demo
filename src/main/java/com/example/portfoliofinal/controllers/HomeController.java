package com.example.portfoliofinal.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(){
        return "index";
    }

    @GetMapping("/contact")
    public String contacts(){
        return "contacts";
    }

    @GetMapping("/projects")
    public String projects(){
        return "projects";
    }

    @GetMapping("/education")
    public String eduction(){
        return "education";
    }

    @GetMapping("/about")
    public String about(){
        return "about-me";
    }

}
