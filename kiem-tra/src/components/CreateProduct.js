import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {ErrorMessage, Formik, Field, Form} from "formik";
import * as Yup from 'yup'
import * as productService from "../service/productService";
import {createProduct} from "../service/productService";
import {Link} from "react-router-dom";
import {Navbar} from "../home/Navbar";


export function CreateProduct() {
    const navigate = useNavigate()
    const [types, setTypes] = useState([])


    useEffect(() => {
        const list = async () => {
            let fetchApi = await productService.findAllType()
            setTypes(fetchApi)
        }
        list()
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    code: "",
                    name: "",
                    date: "",
                    amount: "",
                    type: 1
                }}

                validationSchema={Yup.object({
                    name: Yup.string().required("Không để trống"),
                    amount: Yup.number().integer("phải là số nguyên dương")
                })}
                onSubmit={(product) => {
                    const create = async () => {
                        await createProduct({
                            ...product,
                            amount: parseInt(product.amount),
                            type: parseInt(product.type)
                        });
                        alert("Thêm mới thành công")
                        navigate("/product")
                    }
                    create();
                }}
            >
                <div className="container" style={{marginTop: 75}}>
                    <div className="row">
                        <div className="col">
                            <Navbar/>
                        </div>
                        <div>
                            <h1 style={{textAlign: "center"}}>Create Customer</h1>
                        </div>
                        <div className="col-6">
                            <div
                                className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                <Form className="fw-bold-text " style={{width: "60%"}}>
                                    <label>
                                        <label className="color-red"> *</label> Code :
                                    </label>
                                    <Field type="text" className="form-control" placeholder="Name" name="code"/>
                                    <br/>
                                    <ErrorMessage name="code" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Name:
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="H-001"
                                        name="name"
                                    />
                                    <br/>
                                    <ErrorMessage name="name" component="div" className="message-err"/>
                                    <br/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Date:
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="30/04/2023"
                                        name="date"
                                    />
                                    <br/>
                                    <ErrorMessage name="date" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Amount:
                                    </label>
                                    <Field
                                        type="number"
                                        className="form-control"
                                        name="amount"
                                    />
                                    <br/>
                                    <ErrorMessage name="amount" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Select Type Product :
                                    </label>
                                    <Field
                                        as="select"
                                        name="type"
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {
                                            types.map((productTypes, index) => (
                                                <option key={index} value={productTypes.id}>
                                                    {productTypes.name}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <br/>

                                    <Link to={'/product'} className="btn btn-danger ">
                                        Close
                                    </Link>
                                    <button type="submit" className="btn btn-primary mx-5">
                                        Add
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}