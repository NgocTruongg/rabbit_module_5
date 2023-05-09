import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as bookManagementService from "../services/bookManagementService"

export function BookManagementCreate() {
    const navigate = useNavigate()
    return (
        <div>
            <Formik
                initialValues={{title: "", quantity: ""}}

                onSubmit={(values, {resetForm}) => {
                    const create = async () => {
                        await bookManagementService.save(values)
                        debugger
                        resetForm();
                        navigate("/")
                    };
                    create();
                }}
            >
                <Form>
                    <h1>Thêm sách</h1>
                    <div>
                        <label htmlFor="title">Tên sách</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity">Số lượng</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="quantity"
                            name="quantity"
                        />
                    </div>
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
        </div>
    )
}