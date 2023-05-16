package com.example.kiemtrabe.controller;

import com.example.kiemtrabe.dto.ProductDTO;
import com.example.kiemtrabe.service.IProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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

    @PostMapping("")
    public ResponseEntity<?> saveProduct(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            productService.save(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errorList = bindingResult.getFieldErrors();
            for (FieldError error : errorList) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteProduct(@PathVariable Integer id) {
        productService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void getProductDetail(@PathVariable Integer id) {
        productService.findById(id);
    }

    @PutMapping("")
    public ResponseEntity<?> updateProduct(@Validated @RequestBody ProductDTO productDTO,
                                           BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            productService.update(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errorList = bindingResult.getFieldErrors();
            for (FieldError error : errorList) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}

