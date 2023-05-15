package com.example.kiemtrabe.service.impl;

import com.example.kiemtrabe.dto.TypeProductDTO;
import com.example.kiemtrabe.model.TypeProduct;
import com.example.kiemtrabe.repository.ITypeProductRepository;
import com.example.kiemtrabe.service.ITypeProductServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TypeProductService implements ITypeProductServiceImpl {

    @Autowired
    private ITypeProductRepository typeProductRepository;

    @Override
    public List<TypeProductDTO> findAll() {
        List<TypeProduct> typeProductList = typeProductRepository.findAllTypeProduct();
        List<TypeProductDTO> typeProductDTOList = new ArrayList<>();
        TypeProductDTO typeProductDTO;
        for (TypeProduct typeProduct: typeProductList) {
            typeProductDTO = new TypeProductDTO();
            BeanUtils.copyProperties(typeProduct, typeProductDTO);
            typeProductDTOList.add(typeProductDTO);
        }
        return typeProductDTOList;
    }
}
