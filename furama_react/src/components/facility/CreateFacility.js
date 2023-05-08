import {ErrorMessage, Form, Field, Formik} from "formik";
import * as Yup from "yup"
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import React, {useState} from "react";

export function CreateFacility() {
    const [typeFacility, setTypeFacility] = useState(1);

    return (
        <>
            <Formik initialValues={{
                name: '',
                img: '',
                typeFacility: '',
                area: '',
                price: '',
                maxPersons: '',
                rentalType: '',
                roomStandard: '',
                description: '',
                poolArea: '',
                floor: '',
                freeService: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Tên không được để trống, vui lòng nhập tên')
                            .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                        img: Yup.string()
                            .required('Ảnh không được để trống'),
                        area: Yup.number().required("Không được để trống")
                            .positive('Diện tích sử dụng phải là số dương'),
                        price: Yup.number()
                            .required('không được để trống')
                            .positive('Giá phải là số dương'),
                        maxPersons: Yup.number().integer()
                            .required('không được để trống')
                            .positive('Người thuê tối đa phải là số nguyên dương'),
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
                                                <h1 className="text-center">Add New Room</h1>
                                                <br/>
                                                <label>
                                                    <label className="color-red"> *</label> The name of the room:
                                                </label>
                                                <Field type="text" className="form-control" placeholder="Name"
                                                       name="name"/>
                                                <br/>
                                                <ErrorMessage name="name" component="div" className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Room size:
                                                </label>
                                                <Field type="number" className="form-control" placeholder="m2"
                                                       name="area"/>
                                                <br/>
                                                <ErrorMessage name="area" component="div" className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Price room:
                                                </label>
                                                <Field type="number" className="form-control" placeholder="$"
                                                       name="price"/>
                                                <br/>
                                                <ErrorMessage name="price" component="div" className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Amount people:
                                                </label>
                                                <Field type="number" className="form-control" placeholder="people"
                                                       name="maxPersons"/>
                                                <br/>
                                                <ErrorMessage name="maxPersons" component="div" className="message-err"/>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Open the menu to choose
                                                    a rental type:
                                                </label>
                                                <Field
                                                    as="select"
                                                    aria-label="Default select example"
                                                    className="form-select"
                                                    name="roomStandard"
                                                    style={{height: 50, marginBottom: 30}}
                                                    onChange={(e) => {
                                                        setTypeFacility(e.target.value)
                                                    }}
                                                    value={typeFacility}
                                                >
                                                    <option value={1}>Rent by year</option>
                                                    <option value={2}>Rent by day</option>
                                                    <option value={3}>Rent by the hour</option>
                                                </Field>
                                                <br/>

                                                <label>
                                                    <label className="color-red"> *</label> Select rental type:
                                                </label>
                                                <Field
                                                    as="select"
                                                    aria-label="Default select example"
                                                    className="form-select"
                                                    name="typeFacility"
                                                    style={{height: 50, marginBottom: 30}}
                                                    onChange={(e) => {
                                                        setTypeFacility(e.target.value)
                                                    }}
                                                    value={typeFacility}
                                                >
                                                    <option value="1">Villa</option>
                                                    <option value="2">House</option>
                                                    <option value="3">Room</option>
                                                </Field>
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