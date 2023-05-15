package com.example.kiemtrabe.dto;

import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class ProductDTO {
    private Integer id;
    @Pattern(regexp = "H-[0-9]{4}$", message = "Mã sách có định dạng H-XXXX (X là số)")
    private String code;
    @Size(max = 100, message = "Tên sách không dài quá 100 ký tự")
    private String name;

    private String date;
    @NotBlank(message = "Số lượng sách phải là số nguyên dương")
    @Digits(fraction = 0, message = "Số lượng sách phải là số nguyên", integer = 10)
    private Integer amount;
    private TypeProductDTO typeProductDTO;

    public ProductDTO() {
    }

    public ProductDTO(Integer id, String code, String name, String date, Integer amount, TypeProductDTO typeProductDTO) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.typeProductDTO = typeProductDTO;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public TypeProductDTO getTypeProductDTO() {
        return typeProductDTO;
    }

    public void setTypeProductDTO(TypeProductDTO typeProductDTO) {
        this.typeProductDTO = typeProductDTO;
    }
}
