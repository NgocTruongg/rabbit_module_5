import {customerList} from "./Customer";

export function ListCustomer() {
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
                        {customerList.map((customerList, index) => (
                            <tr>
                                <td>{customerList.id}</td>
                                <td>{customerList.name}</td>
                                <td>{customerList.dateOfBirth}</td>
                                <td>{customerList.gender}</td>
                                <td>{customerList.identity}</td>
                                <td>{customerList.phone}</td>
                                <td>{customerList.email}</td>
                                <td>{customerList.customerType}</td>
                                <td>{customerList.address}</td>
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