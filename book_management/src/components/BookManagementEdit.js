import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as bookManagementService from "../services/bookManagementService"
import {useParams} from "react-router";

export function BookManagementEdit() {

    const navigate = useNavigate();
    const [bookData, setBookData] = useState();
    const param = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            let result = await bookManagementService.findById(param.id);
            setBookData(result);
        };
        fetchApi();
    }, []);

    if (!bookData) {
        return null;
    }

    return (
        <div>
            <Formik
                initialValues={{
                    title: bookData?.title,
                    quantity: bookData?.quantity
                }}

                onSubmit={(values, {resetForm}) => {
                    const update = async () => {
                        await bookManagementService.edit(bookData?.id, values);
                        resetForm();
                        navigate("/")
                    };
                    update();
                }}
            >
                <Form>
                    <h1>Cập nhật sách</h1>
                    <div>
                        <Field
                            type="hidden"
                            className="form-control"
                            id="id"
                            name="id"
                        />
                    </div>
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
                    <button type="submit">Cập nhật</button>
                </Form>
            </Formik>
        </div>
    );
}