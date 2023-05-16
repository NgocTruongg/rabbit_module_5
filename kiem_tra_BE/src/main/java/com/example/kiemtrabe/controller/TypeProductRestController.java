package com.example.kiemtrabe.controller;
import com.example.kiemtrabe.dto.TypeProductDTO;
import com.example.kiemtrabe.service.ITypeProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/typeProduct")
@CrossOrigin("*")
public class TypeProductRestController {

    @Autowired
    private ITypeProductServiceImpl typeProductService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<TypeProductDTO> getAllTypeProduct() {
        return typeProductService.findAll();
    }
}
