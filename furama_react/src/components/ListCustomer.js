import {Component} from "react";

export class ListCustomer extends Component {
    render() {
        return (
            <>
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
                                <tr>
                                    <td>1</td>
                                    <td>Trường</td>
                                    <td>10/09/1998</td>
                                    <td>Nam</td>
                                    <td>193827312</td>
                                    <td>0378730129</td>
                                    <td>ngongoctruong1111ts@gmail.com</td>
                                    <td>Diamond</td>
                                    <td>Đà Nẵng</td>
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
                                <tr>
                                    <td>2</td>
                                    <td>Trường</td>
                                    <td>10/09/1998</td>
                                    <td>Nam</td>
                                    <td>193827312</td>
                                    <td>0378730129</td>
                                    <td>ngongoctruong1111ts@gmail.com</td>
                                    <td>Diamond</td>
                                    <td>Đà Nẵng</td>
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
                                <tr>
                                    <td>3</td>
                                    <td>Trường</td>
                                    <td>10/09/1998</td>
                                    <td>Nam</td>
                                    <td>193827312</td>
                                    <td>0378730129</td>
                                    <td>ngongoctruong1111ts@gmail.com</td>
                                    <td>Diamond</td>
                                    <td>Đà Nẵng</td>
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
                                <tr>
                                    <td>4</td>
                                    <td>Trường</td>
                                    <td>10/09/1998</td>
                                    <td>Nam</td>
                                    <td>193827312</td>
                                    <td>0378730129</td>
                                    <td>ngongoctruong1111ts@gmail.com</td>
                                    <td>Diamond</td>
                                    <td>Đà Nẵng</td>
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
                                <tr>
                                    <td>5</td>
                                    <td>Trường</td>
                                    <td>10/09/1998</td>
                                    <td>Nam</td>
                                    <td>193827312</td>
                                    <td>0378730129</td>
                                    <td>ngongoctruong1111ts@gmail.com</td>
                                    <td>Diamond</td>
                                    <td>Đà Nẵng</td>
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

            </>
        )
    }

}