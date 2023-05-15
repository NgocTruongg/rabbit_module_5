package com.example.kiemtrabe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;
    @Column(name = "date")
    private String date;
    @Column(name = "amount")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "product_type_id")
    @JsonBackReference
    private TypeProduct typeProduct;

    public Product() {
    }

    public Product(Integer id, String code, String name, String date, Integer amount, TypeProduct typeProduct) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.typeProduct = typeProduct;
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

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }
}
