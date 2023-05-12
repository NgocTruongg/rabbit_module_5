import React, {useEffect, useState} from "react";
import * as facilityService from "../service/facilityService";
import {Navbar} from "../../home/Navbar";
import {Link} from "react-router-dom";
import {Footer} from "../../home/Footer";
import {findAllFacility, findAllRental, findAllTypeRoom} from "../service/facilityService";

export function ListFacility() {

    const [facilitys, setFacilitys] = useState([])
    const [rentalTypes, setRentalTypes] = useState([])
    const [typeRooms, setTypeRooms] = useState([])
    const [facilityData, setFacilityData] = useState()

    const getData = async (id) => {
        const data = await facilityService.findById(id)
        setFacilityData(data)
    }

    useEffect(() => {
        const fechApi = async () => {
            const result = await facilityService.findAllFacility()
            setFacilitys(result)
        }
        fechApi()
    })

    useEffect(() => {
        const list = async () => {
            setFacilitys(await findAllFacility())
            setRentalTypes(await findAllRental())
            setTypeRooms(await findAllTypeRoom())
        }
        list()
    },[])
    const handleDelete = async () => {
        await facilityService.removeFacility(facilityData.id)
        let result = facilityService.findAllFacility()
        setFacilityData(result)
        alert("Xóa dịch vụ thành công!!!!!!")
    }

    if (!facilitys) {
        return null
    }

    return (
        <>
            <div className="container" style={{marginTop: 75}}>
                <div className="row">
                    <Navbar/>
                    <div className="col">
                        <h1 style={{textAlign: "center"}}>List Facility</h1>
                        <div>
                            <Link to={'/createFacility'} className="btn btn-success my-3">
                                Thêm mới dịch vụ
                            </Link>

                        </div>
                        <table className="table fw-bold-text">
                            <thead className="table-dark">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Area</th>
                                <th>Price</th>
                                <th>Max Persons</th>
                                <th>Rental type</th>
                                <th>Type Room</th>
                                <th className="text-center">Update</th>
                                <th className="text-center">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {facilitys.map((facility, index) => (

                                <tr key={index}>
                                    <td>{facility.id}</td>
                                    <td>{facility.name}</td>
                                    <td>{facility.area}</td>
                                    <td>{facility.price}</td>
                                    <td>{facility.maxPersons}</td>
                                    <td>
                                        {
                                            rentalTypes.find(rentalType =>
                                                facility.rental === rentalType.id)?.type
                                        }
                                    </td>
                                    <td>
                                        {
                                            typeRooms.find(gender =>
                                                facility.typeRoom === gender.id)?.name
                                        }
                                    </td>
                                    <td>
                                        <div className="card-body p-2">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                data-bs-toggle="modal"
                                                data-bs-target="#deleteFacility"
                                            >
                                                <a onClick={() => getData(facility.id)}
                                                   className="btn btn-danger">Delete</a>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="card-body p-2">
                                            <Link to={`/editFacility/${facility.id}`} className="btn btn-primary">
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
                            <div className="modal-body">
                                Bạn có muốn xoá{" "}
                                <span className={"text-danger"}>{facilityData?.name}</span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button onClick={() => handleDelete()} type="button" className="btn btn-primary"
                                        data-bs-dismiss="modal">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}