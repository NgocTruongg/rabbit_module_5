import React from "react";
import {contactMap} from "./Contact";

export function ListContact() {

    return (
        <>
            <div className="main">
                <div className="container">
                    <h1 style={{textAlign: "center", marginTop: 20}}>List Customer</h1>
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th>STT</th>
                            <th>Some Contract</th>
                            <th>Start Day</th>
                            <th>End Day</th>
                            <th>Deposit Amount</th>
                            <th>Total Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contactMap.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.contractId}</td>
                                <td>{contact.contractCode}</td>
                                <td>{contact.startDate}</td>
                                <td>{contact.completionDate}</td>
                                <td>{contact.advancePayment}</td>
                                <td>{contact.remainingPayment}</td>
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
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )

}