import {ErrorMessage, Form, Field, Formik} from "formik";
import * as Yup from "yup"
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import React from "react";

export function CreateContract() {

    return (
        <>
            <Formik initialValues={{
                contactId: '',
                contactCode:'',
                startDate: '',
                completionDate: '',
                advancePayment: '',
                remainingPayment: '',
            }}
                    validationSchema={Yup.object({
                        contactCode: Yup.string()
                            .required('Tên không được để trống, vui lòng nhập tên')
                            .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                        startDate: Yup.string()
                            .required('Ngày bắt đầu không được để trống'),
                        completionDate: Yup.string()
                            .required('Ngày kết thúc không được để trống'),
                        advancePayment: Yup.number()
                            .required('không được để trống')
                            .positive('Giá phải là số dương'),
                        remainingPayment: Yup.number()
                            .required('không được để trống')
                            .positive('Giá phải là số dương')

                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                            toast.success(`Tạo ${values.nameFacility} thành công `, {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                            });
                        }, 1000)
                    }}>
                {
                    ({isSubmitting}) => (
                        <section
                            className="vh-100 bg-image"
                            style={{backgroundImage: 'url("./image/N.NT-31-1024x676.jpg")'}}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div
                                            className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                            <Form className="fw-bold-text">
                                                <h1 className="text-center">Add New Contract</h1>
                                                <br/>
                                                <label>
                                                    <label className="color-red"> *</label> Code contracts:
                                                </label>
                                                <Field type="text" className="form-control" placeholder="HD-001"
                                                       name="contactCode"/>
                                                <br/>
                                                <ErrorMessage name="contactCode" component="div"
                                                              className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Start Date:
                                                </label>
                                                <Field type="date" className="form-control" placeholder="mm/dd/yyyy"
                                                       name="startDate"/>
                                                <br/>
                                                <ErrorMessage name="startDate" component="div" className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> End Day:
                                                </label>
                                                <Field type="date" className="form-control" placeholder="mm/dd/yyyy"
                                                       name="completionDate"/>
                                                <br/>
                                                <ErrorMessage name="completionDate" component="div"
                                                              className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Deposit Amount:
                                                </label>
                                                <Field type="number" className="form-control" placeholder="0.0$"
                                                       name="advancePayment"/>
                                                <br/>
                                                <ErrorMessage name="advancePayment" component="div"
                                                              className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Total Amount:
                                                </label>
                                                <Field type="number" className="form-control" placeholder="0.0 $"
                                                       name="remainingPayment"/>
                                                <br/>
                                                <ErrorMessage name="remainingPayment" component="div"
                                                              className="message-err"/>
                                                <br/>
                                                {isSubmitting ?
                                                    <Vortex
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="vortex-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="vortex-wrapper"
                                                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                                    />
                                                    :
                                                    <div className="d-flex justify-content-center">
                                                        <button
                                                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                            type="submit"
                                                        >
                                                            Add
                                                        </button>
                                                    </div>
                                                }
                                                <ToastContainer/>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </Formik>
        </>
    )
}