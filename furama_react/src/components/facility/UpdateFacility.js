import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as facilityService from "../service/facilityService";
import {useNavigate, useParams} from "react-router";
import {editFacility, findAllRental, findAllTypeRoom} from "../service/facilityService";
import {Link} from "react-router-dom";
import {Navbar} from "../../home/Navbar";

export function UpdateFacility() {

    const navigate = useNavigate();
    const [facilityData, setFacilityData] = useState();
    const [typeRooms, setTypeRooms] = useState([])
    const [rentals, setRentals] = useState([])
    const param = useParams();

    useEffect(() => {
        const data = async () => {
            let result = await facilityService.findById(param.id)
            setFacilityData(result)
        }
        data()
    }, [param.id])

    useEffect(() => {
        const fetchApi = async () => {
            setTypeRooms(await findAllTypeRoom())
            setRentals(await findAllRental())
        }
        fetchApi()
    }, [])

    if (!facilityData) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{
                id: facilityData?.id,
                name: facilityData?.name,
                area: facilityData?.area,
                price: facilityData?.price,
                maxPersons: facilityData?.maxPersons,
                rental: facilityData?.rental,
                typeRoom: facilityData?.typeRoom,
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Tên không được để trống, vui lòng nhập tên')
                            .matches(/\D+/, 'Tên phải đúng theo định dạng không có số'),
                        area: Yup.string()
                            .required('không được để trống'),
                        price: Yup.string()
                            .required('không được để trống'),
                        maxPersons: Yup.string()
                            .required('không được để trống')
                    })}
                    onSubmit={(facility) => {
                        const edit = async () => {
                            await editFacility({
                                ...facility,
                                area: parseInt(facilityData.area),
                                rental: parseInt(facilityData.rental),
                                typeRoom: parseInt(facilityData.typeRoom)

                            });
                            debugger
                            alert("Sửa thông tin dịch vụ thành công !!!");
                            navigate("/facility")
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
                            <h1 style={{textAlign: "center"}}>Update Facility</h1>
                        </div>
                        <div className="col-6">
                            <div
                                className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                <Form className="fw-bold-text " style={{width: "60%"}}>
                                    <h1 className="text-center">Update Facility</h1>
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
                                    <Field type="text" className="form-control"
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
                                    <ErrorMessage name="maxPersons" component="div"
                                                  className="message-err"/>
                                    <br/>

                                    <label>
                                        <label className="color-red"> *</label> Open the menu to choose
                                        a rental type:
                                    </label>
                                    <Field
                                        component="select"
                                        name="rental"
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {
                                            rentals.map((rental, index) => (
                                                <option key={index} value={rental.id}>
                                                    {rental.type}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <br/>

                                    <label>
                                        <label className="color-red"> *</label> Select type room:
                                    </label>
                                    <Field
                                        component="select"
                                        name="typeRoom"
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        {
                                            typeRooms.map((type, index) => (
                                                <option key={index} value={type.id}>
                                                    {type.name}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <br/>
                                    <Link to={'/facility'} className="btn btn-danger ">
                                        Close
                                    </Link>
                                    <button type="submit" className="btn btn-primary mx-5">
                                        Save
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}