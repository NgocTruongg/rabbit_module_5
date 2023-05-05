import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer, toast} from 'react-toastify';
import * as Yup from "yup";
import {InfinitySpin} from "react-loader-spinner";


export default function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: "",
                    email: "",
                    phone: "",
                    message: ""
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required("Không được bỏ trống")
                        .matches(/^[a-zA-Z]{2,}$/, "Tên không chứa các kí tự đặc biệt"),
                    email: Yup.string()
                        .required("Không được bỏ trống")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email phải đúng theo quy tắc ***@gmail.com"),
                    phone: Yup.string()
                        .required("không được bỏ trống")
                        .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, "SĐT phải là 10 số")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Thêm mới liên lạc ${values.firstName} thành công`);
                    })

                }}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <div className="title">Contact Form</div>
                            <div className="input-container ic1">
                                <Field id="firstname" className="input" type="text" placeholder=" " name="firstName"/>
                                <div className="cut"></div>
                                <label htmlFor="firstname" className="placeholder">First name</label>
                                <ErrorMessage name="firstName" component="div" className="message-err"/>

                            </div>

                            <br/>

                            <div className="input-container ic2">
                                <Field id="Email" className="input" type="text" placeholder=" " name="email"/>
                                <div className="cut"/>
                                <label htmlFor="Email" className="placeholder">
                                    Email
                                </label>
                                <ErrorMessage name="email" component="div" className="message-err"/>
                            </div>

                            <br/>

                            <div className="input-container ic2">
                                <Field id="phone" className="input" type="text" placeholder=" " name="phone"/>
                                <div className="cut cut-short"/>
                                <label htmlFor="phone" className="placeholder">
                                    Phone
                                </label>
                                <ErrorMessage name="phone" component="div" className="message-err"/>
                            </div>

                            <br/>

                            <div className="input-container-message ic2">
                                <textarea id="Message" className="input" type="text" placeholder="" name="message"/>
                                <label htmlFor="phone" className="placeholder">
                                    Message
                                </label>
                            </div>
                            {
                                isSubmitting ?
                                    <InfinitySpin
                                        width='200'
                                        color="#4fa94d"
                                    />
                                    :
                                    <button type="text" className="submit">submit</button>
                            }
                        </Form>
                    )
                }
            </Formik>
            <ToastContainer/>
        </>
    )
}