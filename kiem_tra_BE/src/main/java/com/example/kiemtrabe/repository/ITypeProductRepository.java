package com.example.kiemtrabe.repository;

import com.example.kiemtrabe.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ITypeProductRepository extends JpaRepository<TypeProduct, Integer> {
    @Query(value = "select * from type_product", nativeQuery = true)
    List<TypeProduct> findAllTypeProduct();

    @Query(value = "select * from type_product where id = :id", nativeQuery = true)
    TypeProduct findTypeProductById(@Param("id") Integer id);
}
