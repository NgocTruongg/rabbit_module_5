import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Navbar} from "../../home/Navbar";
import {Footer} from "../../home/Footer";
import React, {useEffect, useState} from "react";
import moment from "moment";
import {useNavigate, useParams} from "react-router";
import {
    editCustomer,
    findAllCustomerType,
    findAllGender,
} from "../service/customerService";
import {Link} from "react-router-dom";
import * as customerService from "../service/customerService";

export function EditCustomer() {

    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();
    const [genders, setGenders] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    const param = useParams();

    useEffect(() => {
        const data = async () => {
            let result = await customerService.findCustomerById(param.id)
            setCustomerData(result)
        }
        data()
    }, [param.id]);

    useEffect(() => {
        const fetchApi = async () => {
            setCustomerTypes(await findAllCustomerType())
            setGenders(await findAllGender())
        }
        fetchApi()
    })
    if (!customerData) {
        return null;
    }

    return (
        <>
            <Formik initialValues={{
                id: customerData?.id,
                name: customerData?.name,
                dateOfBirth: customerData?.dateOfBirth,
                gender: customerData?.gender,
                identity: customerData?.identity,
                phone: customerData?.phone,
                email: customerData?.email,
                customerType: customerData?.customerType,
                address: customerData?.address
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
                        dateOfBirth: Yup.string().required("Không được để trống"),
                        address: Yup.string().required("Không được để trống")
                    })}

                    onSubmit={(customer) => {
                        const edit = async () => {
                            await editCustomer({
                                ...customer,
                                dateOfBirth: moment(customer.dateOfBirth).format('DD-MM-YYYY'),
                                gender: parseInt(customer.gender),
                                customerType: parseInt(customer.customerType)
                            });
                            alert("Sửa thông tin khách hàng thành công !!!");
                            navigate("/customer")
                        }
                        edit();
                    }}
            >
                <div className="container" style={{marginTop: 75}}>
                    <div className="row">
                        <div className="col">
                            <Navbar/>
                        </div>
                        <div>
                            <h1 style={{textAlign: "center"}}>Update Customer</h1>
                        </div>
                        <div className="col-6">
                            <div
                                className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                <Form className="fw-bold-text " style={{width: "60%"}}>
                                    <Field type="hidden" className="form-control" placeholder="Name" name="id"/>

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
                                        type="text"
                                        className="form-control"
                                        placeholder="mm/dd/yyyy"
                                        name="dateOfBirth"
                                    />
                                    <br/>
                                    <ErrorMessage name="dateOfBirth" component="div" className="message-err"/>
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
                                        type="text"
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
                                        type="text"
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
                                        Save
                                    </button>
                                </Form>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="test" src="/public/img/7.jpg"/>
                        </div>
                    </div>
                </div>
            </Formik>
            <Footer/>
        </>
    )
}