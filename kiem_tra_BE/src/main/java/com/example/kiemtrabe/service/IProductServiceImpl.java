package com.example.kiemtrabe.service;

import com.example.kiemtrabe.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductServiceImpl {

    Page<ProductDTO> findAll(String name, String productTypeId, Pageable pageable);

    void save(ProductDTO productDTO);
    void delete(Integer id);
    ProductDTO findById(Integer id);
    void update(ProductDTO productDTO);
}
