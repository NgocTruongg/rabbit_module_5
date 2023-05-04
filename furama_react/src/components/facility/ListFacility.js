import React from "react";
import {facilityMap} from "./Facility";

export function ListFacility() {

    return (
        <>
            <div className="main">
                <div className="container">
                    <h1 style={{textAlign: "center", marginTop: 20}}>List Customer</h1>
                    <table className="table">
                        <thead className="table-dark">
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Price</th>
                            <th>Max Persons</th>
                            <th>Rental type</th>
                            <th className="text-center">Update</th>
                            <th className="text-center">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {facilityMap.map((facility, index) => (

                            <tr>
                                <td>{facility.id}</td>
                                <td>{facility.name}</td>
                                <td>{facility.area}</td>
                                <td>{facility.price}</td>
                                <td>{facility.maxPersons}</td>
                                <td>{facility.rentalType}</td>
                                <td>
                                    <div className="card-body p-2">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteCustomer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div className="card-body p-2">
                                        <a href="#" className="btn btn-primary">
                                            Update
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}