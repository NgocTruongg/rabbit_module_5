import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";

export function Medical() {
    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    passport: "",
                    yearOfBirth: "",
                    gender: "",
                    nationality: "",
                    company: "",
                    workingParts: "",
                    insurance: "",
                    province: "",
                    district: "",
                    wards: "",
                    apartmentNumber: "",
                    phone: "",
                    email: "",
                    move: "",
                    symptom: "",
                    contact: ""
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Nhập tên").matches(/^[a-zA-Z]{2,}$/, "Tên không chứa các kí tự đặc biệt"),
                    passport: Yup.string().required("Nhập passport"),
                    yearOfBirth: Yup.number().required("nhập ngày sinh").min(1960),
                    gender: Yup.string().required("Lựa chọn giới tính"),
                    nationality: Yup.string().required("phải nhập quốc tịch"),
                    company: Yup.string().required("thông tin công ty"),
                    workingParts: Yup.string().required("phải nhập bộ phận làm việc"),
                    province: Yup.string().required("phải nhập tỉnh thành"),
                    district: Yup.string().required("phải nhập quận/huyện"),
                    wards: Yup.string().required("phải nhập phường/xã"),
                    apartmentNumber: Yup.string().required("phải nhập địa chỉ nhà"),
                    phone: Yup.string()
                        .required("không được bỏ trống")
                        .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, "SĐT phải là 10 số"),
                    email: Yup.string()
                        .required("Không được bỏ trống")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email phải đúng theo quy tắc ***@gmail.com"),
                })}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <div className='container'>
                    <div className='row'>
                        <h1>Tờ khai y tế</h1>
                        <Form>
                            <div className='row'>
                                <label> Họ và tên</label><br/>
                                <Field type='text' name='name'/><br/>
                                <ErrorMessage name="name" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <label>Số CMND</label><br/>
                                <Field type='number' name='passport'/><br/>
                                <ErrorMessage name="passport" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <label>Ngày sinh</label><br/>
                                <Field type='text' name='yearOfBirth'/><br/>
                                <ErrorMessage name="yearOfBirth" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <span>Giới tính</span>
                                <div>
                                    <Field type='radio' name='gender' value="nam"/>
                                    <label>Nam</label>
                                </div>
                                <div>
                                    <Field type='radio' name='gender' value="nữ"/>
                                    <label>Nữ</label>
                                </div>
                                <div>
                                    <Field type='radio' name='gender' value="khác"/>
                                    <label>khác</label>
                                </div>

                            </div>
                            <div className='row'>
                                <label>Quốc tịch</label><br/>
                                <Field type='text' name='nationality'/><br/>
                                <ErrorMessage name="nationality" component='span' className="message-err"/> <br/>
                            </div>

                            <div className='row'>
                                <label>Công ty</label><br/>
                                <Field type='text' name='company'/> <br/>
                                <ErrorMessage name="company" component='span' className="message-err"/> <br/>
                            </div>

                            <div className='row'>
                                <label>Bộ phận</label><br/>
                                <Field type='text' name='workingParts'/>
                                <ErrorMessage name="workingParts" component='span' className="message-err"/> <br/>
                                <br/>
                            </div>

                            <div className='row'>
                                <label>Có thẻ bảo hiểm y tế</label><br/>
                                <Field type='checkbox' name='insurance'/><br/>
                            </div>
                            <h3>Địa chỉ liên hệ</h3>
                            <div className='row'>
                                <label> Tỉnh/ Thành phố</label><br/>
                                <Field type='text' name='province'/><br/>
                                <ErrorMessage name="province" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <label>Quận/Huyện</label><br/>
                                <Field type='text' name='district'/><br/>
                                <ErrorMessage name="district" component='span' className='message-err'/> <br/>
                            </div>
                            <div className='row'>
                                <label>Phường/xã</label><br/>
                                <Field type='text' name='wards'/><br/>
                                <ErrorMessage name="wards" component='span' className='message-err'/> <br/>
                            </div>
                            <div className='row'>
                                <label>Số nhà</label><br/>
                                <Field type='text' name='apartmentNumber'/><br/>
                                <ErrorMessage name="apartmentNumber" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <label> Số điện thoại</label><br/>
                                <Field type='text' name='phone'/><br/>
                                <ErrorMessage name="phone" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <label>Email</label><br/>
                                <Field type='text' name='email'/><br/>
                                <ErrorMessage name="email" component='span' className="message-err"/> <br/>
                            </div>
                            <div className='row'>
                                <h4>Trong vòng 14 ngày Anh/Chị đã đến vùng lãnh thổ/Quốc gia nào (có thể đi qua nhiều
                                    quốc gia) ?</h4><br/>
                                <textarea type='text' name='move'/>
                                <ErrorMessage name='move' component='span' className='form-err'/>
                            </div>
                            <br/>
                            <div className='row'>
                                <h4>Trong vòng 14 ngày Anh/Chị có xuất hiện dấu hiệu nào dưới đây không ?</h4><br/>
                                <div className='row-cols-6'>

                                    <Field type='checkbox' name='symptom' value='1'/>
                                    <span>Sốt</span><br/>
                                    <Field type='checkbox' name='symptom' value='2'/>
                                    <span>Ho</span><br/>
                                    <Field type='checkbox' name='symptom' value='3'/>
                                    <span>Khó thở</span><br/>
                                    <Field type='checkbox' name='symptom' value='4'/>
                                    <span>Viêm phổi</span><br/>
                                    <Field type='checkbox' name='symptom' value='5'/>
                                    <span>Đạu họng</span><br/>
                                    <Field type='checkbox' name='symptom' value='6'/>
                                    <span>Mệt mỏi</span><br/>
                                </div>
                                <ErrorMessage name='symptom' component='span' className='message-err'/>
                            </div>
                            <br/>
                            <div className='row'>
                                <h4>Trong vòng 14 ngày Anh/Chị có tiếp xúc với ?</h4><br/>
                                <div className='row-cols-6'>
                                    <Field type='checkbox' name='contact' value='1'/>
                                    <span>Người bệnh hoặc nghi ngờ mắc bệnh Covid-19</span><br/>
                                    <Field type='checkbox' name='contact' value='2'/>
                                    <span>Người từ nước có bệnh Covid-19</span><br/>
                                    <Field type='checkbox' name='contact' value='3'/>
                                    <span>Người có biểu hiện (sốt,ho,khó thở,viêm phổi)</span><br/>
                                </div>
                                <ErrorMessage name='contact' component='span' className='message-err'/>
                            </div>
                            <br/>
                            <button type="button" className="btn btn-warning">Khai báo</button>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}