import React, {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Navbar} from "../home/Navbar";
import {Link} from "react-router-dom";
import {Formik} from "formik";


export function Product() {

    const [products, setProducts] = useState([])
    const [productData, setProductData] = useState()
    const [pageCount, setPageCount] = useState(0)
    const [filters, setFilers] = useState({page:0, name:"", type:""});

    const getData = async (id) => {
        const data = await productService.findByIdProduct(id)
        setProductData(data)
    };

    const handleDelete = async () => {
        await productService.removeProduct(productData.id)
        let result = await productService.findAllProduct()
        setProducts(result)
        alert("xóa thành công")
    }

    const handlePageClick =(event) =>{
        setFilers((pev)=>({...pev, page: event.select}));
    };


    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.findAllProduct()
            console.log(result)
            setProducts(result.content)
        }
        getProduct()
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    name: filters.name,
                    type: filters.type,
                }}
                onSubmit={(values) => {
                    setFilers((prev) => {
                        return { ...prev, ...values, page: 0 };
                    });
                }}
            >
            </Formik>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <Navbar/>
                    </div>
                    <div className="col-justify">
                        <h1 className={"list"}>List Product</h1>
                        <div>
                            <Link to={'/createProduct'} className="btn btn-success my-3">
                                Thêm mới sản phẩm
                            </Link>

                        </div>
                        <table className="table">
                            <thead className="table-dark">
                            <tr>
                                <th>STT</th>
                                <th>Code Product</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Type Product</th>
                                <th className="text-center">Update</th>
                                <th className="text-center">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products.map((product, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.code}</td>
                                        <td>{product.name}</td>
                                        <td>{product.date}</td>
                                        <td>{product.amount}</td>
                                        <td>
                                            {product.typeProductDTO.name}
                                        </td>
                                        <td>
                                            <div className="card-body p-2">
                                                <Link to={`/updateProduct/${product.id}`} className="btn btn-primary">
                                                    <i className="bi bi-pencil-square"/>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="card-body p-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#delete"
                                                    onClick={() => getData(product.id)}
                                                >
                                                    <i className="bi bi-trash3"/>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>

                        <div
                            className="modal fade"
                            id="delete"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Delete Confirmation
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        Bạn có muốn xoá{" "}
                                        <span className={"text-danger"}>{productData?.name}</span>?
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button type="button" onClick={() => handleDelete()} className="btn btn-primary"
                                                data-bs-dismiss="modal"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}