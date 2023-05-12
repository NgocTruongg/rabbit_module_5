import React, {useEffect, useState} from "react";
import {Footer} from "../../home/Footer";
import {Navbar} from "../../home/Navbar";
import {Link} from "react-router-dom";
import * as customerService from "../service/customerService";
import {findAllCustomerType, findAllGender, findCustomerById} from "../service/customerService";

export function ListCustomer() {

    const [customers, setCustomers] = useState([])
    const [genders, setGenders] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    const [customerDelete, setCustomerDelete] = useState()

    const getData = async (id) => {
        const data = await findCustomerById(id)
        setCustomerDelete(data)
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.findAllCustomer()
            setCustomers(result)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        const data = async () => {
            setCustomerTypes(await findAllCustomerType())
            setGenders(await findAllGender())
        }
        data()
    })

    const handleDelete = async () => {
        await customerService.deleteCustomer(customerDelete.id)
        let result = await customerService.findAllCustomer()
        setCustomers(result)
        alert("Xóa Khách hàng thành công!!!")
    }

    if (!customers) {
        return null
    }
    return (
        <>
            <div className="container" style={{marginTop: 75}}>
                <div className="row">
                    <div className="col">
                        <Navbar/>
                    </div>
                    <div className="col">
                        <h1 style={{textAlign: "center"}}>List Customer</h1>
                        <div>
                            <Link to={'/createCustomer'} className="btn btn-success my-3">
                                Thêm mới khách hàng
                            </Link>

                        </div>
                        <table className="table">
                            <thead className="table-dark">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Day Of Birth</th>
                                <th>Gender</th>
                                <th>CMND</th>
                                <th>Number phone</th>
                                <th>Email</th>
                                <th>Type customer</th>
                                <th>Address</th>
                                <th className="text-center">Update</th>
                                <th className="text-center">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.dateOfBirth}</td>
                                    <td>
                                        {
                                            genders.find(gender =>
                                                customer.gender === gender.id)?.gender
                                        }
                                    </td>
                                    <td>{customer.identity}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.email}</td>
                                    <td>
                                        {
                                            customerTypes.find(customerType =>
                                                customer.customerType === customerType.id)?.customerType
                                        }
                                    </td>
                                    <td>{customer.address}</td>
                                    <td>
                                        <div className="card-body p-2">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteCustomer"
                                            >
                                                <a onClick={() => getData(customer.id)}
                                                   className="btn btn-danger">Delete</a>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-body p-2">
                                            <Link to={`/editCustomer/${customer.id}`} className="btn btn-primary">
                                                Update
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <nav
                            aria-label="Page navigation example"
                            className="d-flex justify-content-center"
                        >
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>


                {/*modal xóa*/}
                <div
                    className="modal fade"
                    id="deleteCustomer"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Delete Confirmation
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                Bạn có muốn xoá{" "}
                                <span className={"text-danger"}>{customerDelete?.name}</span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" onClick={() => handleDelete()} className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <Footer/>
            </div>
        </>
    )
}