package com.bagongkia.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
public class IndexController {

    @GetMapping({"/{path:(?!.*.js|.*.css|.*.jpg).*$}"})
    public String index(Model model, HttpServletRequest request) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();

        Map<String, Object> req = new HashMap<>();
        String root = request.getServletPath().equals("/index.html") ? "/" : request.getServletPath();
        if(request.getQueryString() != null)
            req.put("location", String.format("%s?%s", root, request.getQueryString()));
        else
            req.put("location", root);
        model.addAttribute("req", mapper.writeValueAsString(req));
        return "index";
    }
}
