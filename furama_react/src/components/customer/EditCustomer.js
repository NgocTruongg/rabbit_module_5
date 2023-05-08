import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Navbar} from "../Navbar";
import {Footer} from "../Footer";
import {toast, ToastContainer} from "react-toastify";
import {Vortex} from "react-loader-spinner";
import React from "react";

export function EditCustomer() {
    // const [customerData, setCustomerData] = useState();
    // const [genders, setGenders] = useState([]);
    // const [customerTypes, setCustomerTypes] = useState([]);
    // const param = useParams();
    // useEffect(() => {
    //     const data = async () => {
    //         setCustomerData(await findCustomerById(param.id));
    //     }
    //     data()
    // }, [param.id]);
    //
    // useEffect(() => {
    //     const data = async () => {
    //         setCustomerTypes(await findAllCustomerType())
    //         setGenders(await findAllGender())
    //     }
    //     data()
    // })
    // if (!customerData) {
    //     return null;
    // }
    return (
        <>
            <Navbar/>
            <Formik initialValues={{
                name: "",
                dayOfBirth: "",
                gender: 1,
                passport: "",
                phone: "",
                email: "",
                customerType: 1,
                address: ""
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Không được để trống")
                            .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, "Tên khách hàng không được chứa số và các kí tự đầu tiên của mỗi từ phải viết hoa."),
                        passport: Yup.string()
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
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values);
                            setSubmitting(false);
                            toast.success(`Chỉnh sửa ${values.name} thành công `, {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored"
                            });
                        }, 1000);
                    }}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div
                                        className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                        <Form className="fw-bold-text " style={{width: "60%"}}>
                                            <div>
                                                <h1>Update Customer</h1>
                                            </div>
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
                                            <select className="form-select" aria-label="Default select example">
                                                <option value={1}>Male</option>
                                                <option value={2}>Female</option>
                                                <option value={3}>Other</option>
                                            </select>
                                            <br/>
                                            <label>
                                                <label className="color-red"> *</label> CMND:
                                            </label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                placeholder={12345678}
                                                name="passport"
                                            />
                                            <br/>
                                            <ErrorMessage name="passport" component="div" className="message-err"/>
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
                                            <select className="form-select" aria-label="Default select example">
                                                <option value={1}>Diamond</option>
                                                <option value={2}>Gold</option>
                                                <option value={3}>Silver</option>
                                                <option value={3}>Bronze</option>
                                            </select>
                                            <br/>
                                            <label>
                                                <label className="color-red"> *</label> Address:
                                            </label>
                                            <Field type="text" className="form-control" placeholder="Hà Nội"
                                                   name="address"/>
                                            <br/>
                                            <ErrorMessage name="address" component="div" className="message-err"/>
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
                                                        Save
                                                    </button>
                                                </div>
                                            }
                                            <ToastContainer/>
                                        </Form>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <img className="test" src="./img/create.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Formik>
            <Footer/>
        </>
    )
}