import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Footer} from "../../home/Footer";
import {Navbar} from "../../home/Navbar";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createCustomer, findAllCustomerType, findAllGender} from "../service/customerService";
import moment from "moment";

export function CreateCustomer() {
    const navigate = useNavigate();

    const [customerTypes, setCustomerType] = useState([])
    const [genders, setGenders] = useState([])

    useEffect(() => {
        const list = async () => {
            setCustomerType(await findAllCustomerType())
            setGenders(await findAllGender())
        }
        list()
    }, [])

    return (
        <>
            <Formik initialValues={{
                name: "",
                dayOfBirth: "",
                gender: 1,
                identity: "",
                phone: "",
                email: "",
                customerType: 1,
                address: ""
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Không được để trống")
                            .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, "Tên khách hàng không được chứa số và các kí tự đầu tiên của mỗi từ phải viết hoa."),
                        identity: Yup.string()
                            .required("Không được để trống")
                            .matches(
                                /^([\d]{9}|[\d]{12})$/,
                                "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9)."
                            ),
                        phone: Yup.string()
                            .required("Không được để trống")
                            .matches(
                                /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                                "Số điện thoại gồm 10 số nếu có nhập số 0 ở đầu tiên. Nếu không nhập 0 thì còn 9 số."
                            ),
                        email: Yup.string()
                            .required("Không được để trống.")
                            .matches(
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                "Email phải đúng định dạng. Ví dụ: abc123@xyz.com"
                            ),
                        dayOfBirth: Yup.string().required("Không được để trống"),
                        address: Yup.string().required("Không được để trống")
                    })}
                    onSubmit={(customer) => {
                        const create = async () => {
                            await createCustomer({
                                ...customer,
                                dateOfBirth: moment(customer.dateOfBirth).format('DD-MM-YYYY'),
                                gender: parseInt(customer.gender),
                                customerType: parseInt(customer.customerType)
                            });
                            debugger
                            alert("Thêm mới khách hàng thành công !!!");
                            navigate("/customer")
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
                                        <label className="color-red"> *</label> The name of the customer:
                                    </label>
                                    <Field type="text" className="form-control" placeholder="Name" name="name"/>
                                    <br/>
                                    <ErrorMessage name="name" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Day Of Birth:
                                    </label>
                                    <Field
                                        type="date"
                                        className="form-control"
                                        placeholder="mm/dd/yyyy"
                                        name="dayOfBirth"
                                    />
                                    <br/>
                                    <ErrorMessage name="dayOfBirth" component="div" className="message-err"/>
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
                                                    {gender.gender}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> CMND:
                                    </label>
                                    <Field
                                        type="number"
                                        className="form-control"
                                        placeholder="12345678"
                                        name="identity"
                                    />
                                    <br/>
                                    <ErrorMessage name="identity" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Number Phone:
                                    </label>
                                    <Field
                                        type="number"
                                        className="form-control"
                                        placeholder="037*****90"
                                        name="phone"
                                    />
                                    <br/>
                                    <ErrorMessage name="phone" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Email:
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="***@gmail.com"
                                        name="email"
                                    />
                                    <br/>
                                    <ErrorMessage name="email" component="div" className="message-err"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Select Type Customer :
                                    </label>
                                    <Field
                                        as={"select"}
                                        name={"customerType"}
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {
                                            customerTypes.map((customerType, index) => (
                                                <option key={index} value={customerType.id}>
                                                    {customerType.customerType}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Address:
                                    </label>
                                    <Field type="text" className="form-control" placeholder="Hà Nội"
                                           name="address"/>
                                    <br/>
                                    <ErrorMessage name="address" component="div" className="message-err"/>

                                    <Link to={'/customer'} className="btn btn-danger ">
                                        Close
                                    </Link>
                                    <button type="submit" className="btn btn-primary mx-5">
                                        Add
                                    </button>
                                </Form>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="test" src="/public/img/5.jpg"/>
                        </div>
                    </div>
                </div>
            </Formik>
            <Footer/>
        </>
    )
}