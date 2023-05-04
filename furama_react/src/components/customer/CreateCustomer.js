import {Component} from "react";

export class CreateCustomer extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Add New Customer</h1>
                        <div className="col-6">
                            <div className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                <form className="fw-bold-text " style={{width: "60%"}}>
                                    <label>
                                        <label className="color-red"> *</label> The name of the customer:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Name"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Day Of Birth:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="mm/dd/yyyy"
                                    />
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Select gender :
                                    </label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option value={1}>Male</option>
                                        <option value={2}>Female</option>
                                        <option value={3}>Other</option>
                                    </select>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> CMND:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder={12345678}
                                    />
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Number Phone:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="037*****90"
                                    />
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Email:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="***@gmail.com"
                                    />
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Select Type Customer :
                                    </label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option value={1}>Diamond</option>
                                        <option value={2}>Gold</option>
                                        <option value={3}>Silver</option>
                                        <option value={3}>Bronze</option>
                                    </select>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Address:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Hà Nội"/>
                                    <br/>
                                    <div>
                                        <button type="submit" className="btn btn-primary">
                                            Add
                                        </button>
                                        <button type="submit" className="btn btn-secondary">
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-6">
                            <img className="test" src="./img/create.jpg" alt=""/>
                        </div>
                    </div>
                </div>

            </>

        )
    }

}