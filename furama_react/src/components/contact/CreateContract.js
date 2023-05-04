import {Component} from "react";

export class CreateContract extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="main d-flex justify-content-center align-items-center flex-column mt-5">
                            <form className="fw-bold-text " style={{width: "60%"}}>
                                <label>
                                    <label className="color-red"> *</label> Some contracts:
                                </label>
                                <input type="text" className="form-control" placeholder="HD-001"/>
                                <br/>
                                <label>
                                    <label className="color-red"> *</label>Start Day:
                                </label>
                                <input type="date" className="form-control" placeholder="mm/dd/yyyy"/>
                                <br/>
                                <label>
                                    <label className="color-red"> *</label> End Day:
                                </label>
                                <input type="date" className="form-control" placeholder="mm/dd/yyyy"/>
                                <br/>
                                <label>
                                    <label className="color-red"> *</label> Deposit Amount:
                                </label>
                                <input type="number" className="form-control" placeholder="0.0 $"/>
                                <br/>
                                <label>
                                    <label className="color-red"> *</label> Total Amount:
                                </label>
                                <input type="number" className="form-control" placeholder="0.0 $"/>
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
                </div>

            </>
        )
    }

}