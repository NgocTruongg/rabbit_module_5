import {Component} from "react";

export class CreateFacility extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="main d-flex justify-content-center align-items-center flex-column mt-5">
                                <form className="fw-bold-text">
                                    <h1 className="text-center">Add New Room</h1>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> The name of the room:
                                    </label>
                                    <input type="text" className="form-control" placeholder="Name"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Room size:
                                    </label>
                                    <input type="number" className="form-control" placeholder="m2"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Price room:
                                    </label>
                                    <input type="number" className="form-control" placeholder="$"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Amount people:
                                    </label>
                                    <input type="number" className="form-control" placeholder="people"/>
                                    <br/>
                                    <label>
                                        <label className="color-red"> *</label> Select rental type:
                                    </label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">Open the menu to choose a rental type</option>
                                        <option value={1}>Rent by year</option>
                                        <option value={2}>Rent by day</option>
                                        <option value={3}>Rent by the hour</option>
                                    </select>
                                    <br/>
                                    <div>
                                        <button type="submit" className="btn btn-primary">
                                            Add Room
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