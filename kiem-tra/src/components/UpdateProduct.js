import React, {useEffect, useState} from "react";
import {ErrorMessage, Form, Field, Formik} from "formik";
import * as Yup from 'yup'
import {useNavigate, useParams} from "react-router";
import * as productService from "../service/productService";
import {updateProduct} from "../service/productService";
import {Link} from "react-router-dom";


export function UpdateProduct() {
    const navigate = useNavigate()

    const [productData, setProductData] = useState(null)
    const [types, setTypes] = useState([])
    const param = useParams();


    useEffect(() => {
        const data = async () => {
            let result = await productService.findByIdProduct(param.id)
            console.log((result.data))
            setProductData(result)

        }
        data()
    }, [param.id]);

    useEffect(() => {
        const fetchApi = async () => {
            let result = await productService.findAllType()
            setTypes(result)
        }
        fetchApi()
    }, [])

    if (!productData) {
        return null
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: productData?.id,
                    code: productData?.code,
                    name: productData?.name,
                    date: productData?.date,
                    amount: productData?.amount,
                    type: productData?.type
                }}

                validationSchema={Yup.object({
                    code: Yup.string().required("Không được để trống"),
                    name: Yup.string()
                        .required('Tên không được để trống, vui lòng nhập tên')
                        .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                    date: Yup.string().required("Không được để trống"),
                    amount: Yup.string().required("Không được để trống, phải là số nguyên dương")

                })}

                onSubmit={(product) => {
                    console.log(product)
                    const edit = async () => {
                        await updateProduct({
                            ...product,
                            type: parseInt(productData?.id)
                        });
                        alert("Chỉnh sửa thông tin sản phẩm thành công!!")
                        console.log(product)
                        navigate("/product")
                    }
                    edit()
                }}
            >
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Update Product</h1>
                        <div className="col">
                            <div className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                <Form className="fw-bold-text">
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Code Product:
                                    </label>
                                    <Field type="text" className="form-control"
                                           name="code"/>
                                    <br/>
                                    <ErrorMessage name="code" component="div" className="message-err"/>
                                    <br/>

                                    <label>
                                        <label className="color-red"> *</label> Name:
                                    </label>
                                    <Field type="text" className="form-control"
                                           name="name"/>
                                    <br/>
                                    <ErrorMessage name="name" component="div" className="message-err"/>
                                    <br/>

                                    <label>
                                        <label className="color-red"> *</label> Date:
                                    </label>
                                    <Field type="text" className="form-control"
                                           name="date"/>
                                    <br/>
                                    <ErrorMessage name="date" component="div" className="message-err"/>
                                    <br/>

                                    <label>
                                        <label className="color-red"> *</label> Amount:
                                    </label>
                                    <Field type="text" className="form-control"
                                           name="amount"/>
                                    <br/>
                                    <ErrorMessage name="amount" component="div"
                                                  className="message-err"/>
                                    <br/>

                                    <label>
                                        <label className="color-red"> *</label> Open the menu to choose
                                        a type product:
                                    </label>
                                    <Field
                                        component="select"
                                        name="type"
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {
                                            types.map((type, index) => (
                                                <option key={index} value={type.id}>
                                                    {type.name}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <br/>
                                    <Link to={'/product'} className="btn btn-danger ">
                                        Close
                                    </Link>
                                    <button type="submit" className="btn btn-primary mx-5">
                                        Save
                                    </button>
                                    <br/>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}