import React, {useEffect, useState} from "react";
import * as contactService from "../service/contactService";
import {Navbar} from "../../home/Navbar";
import {Link} from "react-router-dom";
import {Footer} from "../../home/Footer";

export function ListContact() {
    const [contacts, setContacts] = useState([])
    const [code, setCode] = useState('')
    const [idDelete, setIdDelete] = useState(0)

    const getData = async (id, code) => {
        setCode(code)
        setIdDelete(id)
    }
    const list = async () => {
        let result = await contactService.findAllContact()
        setContacts(result)
    }
    useEffect(() => {
        list()
    }, [])

    const handleDelete = async (id) => {
        try {
            await contactService.removeContact(id)
            alert("Xóa thành công")
            list()
        } catch (e) {
            console.log(e)
        }

    }

    if (!contacts) {
        return null
    }
    console.log(contacts)
    return (
        <>
            <div className="container" style={{marginTop: 75}}>
                <div className="row">
                    <Navbar/>
                    <div className="col">
                        <h1 style={{textAlign: "center"}}>List Customer</h1>
                        <div>
                            <Link to={'/createContact'} className="btn btn-success my-3">
                                Thêm mới hợp đồng
                            </Link>

                        </div>
                        <table className="table table-bordered text-center">
                            <thead className="table-dark">
                            <tr>
                                <th>STT</th>
                                <th>Some Contract</th>
                                <th>Start Day</th>
                                <th>End Day</th>
                                <th>Deposit Amount</th>
                                <th>Total Amount</th>
                                <th className="text-center">Update</th>
                                <th className="text-center">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{contact.contactCode}</td>
                                    <td>{contact.startDate}</td>
                                    <td>{contact.completionDate}</td>
                                    <td>{contact.advancePayment}</td>
                                    <td>{contact.remainingPayment}</td>
                                    <td>
                                        <div className="card-body p-2">
                                            <Link to={`/editContact/${contact.contactId}`} className="btn btn-primary">
                                                <i className="bi bi-pencil-square"/>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-body p-2">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteContact"
                                                onClick={() => getData(contact.id, contact.contactCode)}
                                            ><i className="bi bi-trash3"/>
                                            </button>
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
                    id="deleteContact"
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
                                <span className={"text-danger"}>{code}</span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="button" onClick={() => handleDelete(idDelete)} className="btn btn-primary"
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