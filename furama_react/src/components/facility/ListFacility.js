import React from "react";
import {facilityMap, rental} from "./Facility";

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
                                <td>
                                    {rental.filter(type => type.id === facility.rentalType)[0]?.type}
                                </td>
                                <td>
                                    <div className="card-body p-2">
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteFacility"
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
            {/*modal xóa*/}
            <div
                className="modal fade"
                id="deleteFacility"
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
                        <div className="modal-body">Customer</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}