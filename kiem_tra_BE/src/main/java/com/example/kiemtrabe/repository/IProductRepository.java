package com.example.kiemtrabe.repository;

import com.example.kiemtrabe.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product where name like concat('%', :name, '%') " +
            "and product_type_id like concat('%', :id, '%')", nativeQuery = true)
    Page<Product> findAllProduct(@Param("name") String name, @Param("id") String productTypeId, Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "insert into book (code, `name`, `date`, amount, product_type_id) " +
            "values (:code, :name, :date, :amount, :productTypeId)", nativeQuery = true)
    void addProduct(@Param("code") String code,
                    @Param("name") String name,
                    @Param("date") String date,
                    @Param("amount") Integer amount,
                    @Param("productTypeId") Integer productTypeId);

    @Modifying
    @Transactional
    @Query(value = "delete from product where id = :id", nativeQuery = true)
    void deleteProduct(@Param("id") Integer id);

    @Query(value = "select * from product where id = :id", nativeQuery = true)
    Product findProductWithId(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update product set code = :code, name = :name, date = :date, " +
            "amount = :amount, product_type_id = :productTypeId where id = :id", nativeQuery = true)
    void updateProduct(@Param("code") String code,
                       @Param("name") String name,
                       @Param("date") String date,
                       @Param("amount") Integer amount,
                       @Param("productTypeId") Integer productTypeId,
                       @Param("id") Integer id);
}
