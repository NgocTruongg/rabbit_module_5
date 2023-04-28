import React, {Component} from "react";

export class Job extends Component {
    constructor() {
        super();
        this.state = {
            jobName: "",
            jobList: ["Ngày mai lễ 30/4", "lễ lớn đó", "làm bài lẹ", "mà nghĩ lễ thôi"]
        }
    }

    inputJob = (value) => {
        this.setState({
            jobName: value
        })
    }

    addJob = () =>{
        this.setState({
            jobList:[...this.state.jobList ,this.state.jobName],
            jobName:""
        })
    }

    render() {
        return (
            <>
                <input type ="text" value={this.state.jobName}
                       onChange={(event => this.inputJob(event.target.value))}/>
                       <button
                       onClick={() =>this.addJob()}>Thêm vào danh sách</button>
                <ul>
                    {this.state.jobList.map( (job,index) =>(
                        <li key={index}>
                            {job}
                        </li>
                    )) }
                </ul>
            </>
        )
    }

}