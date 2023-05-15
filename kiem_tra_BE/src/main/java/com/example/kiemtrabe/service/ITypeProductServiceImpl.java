package com.example.kiemtrabe.service;

import com.example.kiemtrabe.dto.TypeProductDTO;

import java.util.List;

public interface ITypeProductServiceImpl {
    List<TypeProductDTO> findAll();
}
