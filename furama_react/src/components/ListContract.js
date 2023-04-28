import {Component} from "react";

export class ListContract extends Component {
    render() {
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
                            <tr>
                                <td>1</td>
                                <td>HD-001</td>
                                <td>02/04/2020</td>
                                <td>02/04/2022</td>
                                <td>1000 USD</td>
                                <td>15000 USD</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>2</td>
                                <td>HD-002</td>
                                <td>02/04/2020</td>
                                <td>02/04/2022</td>
                                <td>1000 USD</td>
                                <td>15000 USD</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>3</td>
                                <td>HD-003</td>
                                <td>02/04/2020</td>
                                <td>02/04/2022</td>
                                <td>1000 USD</td>
                                <td>15000 USD</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>4</td>
                                <td>HD-004</td>
                                <td>02/04/2020</td>
                                <td>02/04/2022</td>
                                <td>1000 USD</td>
                                <td>15000 USD</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>5</td>
                                <td>HD-005</td>
                                <td>02/04/2020</td>
                                <td>02/04/2022</td>
                                <td>1000 USD</td>
                                <td>15000 USD</td>
                            </tr>
                            <tr></tr>
                            <tr>
                                <td>6</td>
                                <td>HD-006</td>
                                <td>02/04/2020</td>
                                <td>02/04/2022</td>
                                <td>1000 USD</td>
                                <td>15000 USD</td>
                            </tr>
                            <tr></tr>
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

}