package com.example.kiemtrabe.controller;

import com.example.kiemtrabe.dto.ProductDTO;
import com.example.kiemtrabe.service.IProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductRestController {

    @Autowired
    private IProductServiceImpl productService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Page<ProductDTO> getAllProduct(@PageableDefault(size = 4) Pageable pageable,
                                          @RequestParam(required = false, defaultValue = "") String name,
                                          @RequestParam(required = false, defaultValue = "") String productTypeId) {
        Page<ProductDTO> productPage = productService.findAll(name, productTypeId, pageable);
        return productPage;
    }
}
