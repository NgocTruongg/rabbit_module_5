package com.example.kiemtrabe.dto;

import javax.validation.constraints.Size;
import java.util.Set;

public class TypeProductDTO {
    private Integer id;
    @Size(max = 100, message = "Tên sách không dài quá 100 ký tự")
    private String name;
    private Set<ProductDTO> productDTOSet;

    public TypeProductDTO() {
    }

    public TypeProductDTO(Integer id, String name, Set<ProductDTO> productDTOSet) {
        this.id = id;
        this.name = name;
        this.productDTOSet = productDTOSet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ProductDTO> getProductDTOSet() {
        return productDTOSet;
    }

    public void setProductDTOSet(Set<ProductDTO> productDTOSet) {
        this.productDTOSet = productDTOSet;
    }
}
