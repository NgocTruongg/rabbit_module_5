import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {createStudent, findAllClassName, findAllGender} from "../services/studentService";
import {Link} from "react-router-dom";


export function Create() {


    const [classNames, setClassNames] = useState([])
    const [genders, setGenders] = useState([])

    useEffect(() => {
        const data = async () => {
            setClassNames(await findAllClassName())
            setGenders(await findAllGender())
        }
        data()
    }, [])


    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    gender: 1,
                    className: 2
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Không dược để trống")
                        .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                })}
                onSubmit={(student) => {
                    const create = async () => {
                        await createStudent({
                            ...student,
                            gender: parseInt(student.gender),
                            className: parseInt(student.className)
                        })
                        alert("Thêm mới thành công!!!")
                    }
                    create()
                }}
            >
                <Form>
                    <label>
                        <label className="color-red"> *</label> The name of the customer:
                    </label>
                    <Field type="text" className="form-control" placeholder="Name" name="name"/>
                    <br/>
                    <ErrorMessage name="name" component="div" className="message-err"/>
                    <br/>

                    <label>
                        <label className="color-red"> *</label> Select gender :
                    </label>
                    <Field
                        as={"select"}
                        name="gender"
                        className="form-select"
                        aria-label="Default select example"
                    >
                        {
                            genders.map((gender, index) => (
                                <option key={index} value={gender.id}>
                                    {gender.name}
                                </option>
                            ))
                        }
                    </Field>
                    <br/>

                    <label>
                        <label className="color-red"> *</label> Select class name :
                    </label>
                    <Field
                        as={"select"}
                        name="className"
                        className="form-select"
                        aria-label="Default select example"
                    >
                        {
                            classNames.map((className, index) => (
                                <option key={index} value={className.id}>
                                    {className.name}
                                </option>
                            ))
                        }
                    </Field>
                    <Link to={'/student'} className={"btn btn-danger"}>
                        close
                    </Link>
                    <button type="submit" className="btn btn-primary mx-5">
                        Add
                    </button>
                </Form>

            </Formik>
        </>
    )
}