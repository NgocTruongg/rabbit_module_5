import React, {Component} from "react";

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: "1",
                    name: "Ngô Ngọc Trường",
                    age: "25",
                    address: "Đà Nẵng"
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {this.state.studentList.map((student) => (
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </table>
            </>
        )
    }

}