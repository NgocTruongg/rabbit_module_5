package com.example.kiemtrabe.service.impl;

import com.example.kiemtrabe.dto.ProductDTO;
import com.example.kiemtrabe.dto.TypeProductDTO;
import com.example.kiemtrabe.model.Product;
import com.example.kiemtrabe.repository.IProductRepository;
import com.example.kiemtrabe.repository.ITypeProductRepository;
import com.example.kiemtrabe.service.IProductServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService implements IProductServiceImpl {
    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private ITypeProductRepository typeProductRepository;


    @Override
    public Page<ProductDTO> findAll(String name, String productTypeId, Pageable pageable) {
        Page<Product> productPage = productRepository.findAllProduct(name, productTypeId, pageable);
        List<ProductDTO> productDTOList = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product : productPage) {
            productDTO = new ProductDTO();
            productDTO.setTypeProductDTO(new TypeProductDTO());
            BeanUtils.copyProperties(product.getTypeProduct(), productDTO.getTypeProductDTO());
            BeanUtils.copyProperties(product, productDTO);
            productDTOList.add(productDTO);
        }
        return new PageImpl<>(productDTOList, pageable, productPage.getTotalElements());
    }

    @Override
    public void save(ProductDTO productDTO) {
        Product product = new Product();
        product.setTypeProduct(typeProductRepository.findTypeProductById(productDTO.getTypeProductDTO().getId()));
        BeanUtils.copyProperties(productDTO, product);
        productRepository.addProduct(
                product.getCode(),
                product.getName(),
                product.getDate(),
                product.getAmount(),
                product.getTypeProduct().getId());
    }

    @Override
    public void delete(Integer id) {
        productRepository.deleteProduct(id);

    }

    @Override
    public ProductDTO findById(Integer id) {
        Product product = productRepository.findProductWithId(id);
        ProductDTO productDTO = new ProductDTO();
        productDTO.setTypeProductDTO(new TypeProductDTO());
        BeanUtils.copyProperties(product.getTypeProduct(), productDTO.getTypeProductDTO());
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    @Override
    public void update(ProductDTO productDTO) {
        Product product = new Product();
        product.setTypeProduct(typeProductRepository.findTypeProductById(productDTO.getTypeProductDTO().getId()));
        BeanUtils.copyProperties(productDTO, product);
        productRepository.updateProduct(
                product.getCode(),
                product.getName(),
                product.getDate(),
                product.getAmount(),
                product.getTypeProduct().getId(),
                product.getId()
        );
    }
}
