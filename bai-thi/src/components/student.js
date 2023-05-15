import React, {useEffect, useState} from "react";
import * as studentService from "../services/studentService";
import {findAllClassName, findAllGender, findByIdStudent} from "../services/studentService";


export function Student() {
    const [students, setStudents] = useState([])
    const [classNames, setClassNames] = useState([])
    const [genders, setGenders] = useState([])
    const [studentsData, setStudentsData] = useState()


    const getData = async (id) => {
        const dataId = await findByIdStudent(id)
        setStudentsData(dataId)
    }

    useEffect(() => {
        const fetchApi = async () => {
            const result = await studentService.findAllStudent()
            setStudents(result)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        const data = async () => {
            setClassNames(await findAllClassName())
            setGenders(await findAllGender())
        }
        data()
    }, [])

    const handleDelete = async () => {
        await studentService.removeStudent(studentsData.id)
        let result = await studentService.findAllStudent()
        setStudents(result)
        alert("xóa thành công !!!!")
    }

    if (!students) {
        return null
    }

    return (

        <>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Class</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>
                            {
                                genders.find(gender =>
                                    student.gender === gender.id)?.name
                            }
                        </td>
                        <td>
                            {
                                classNames.find(className =>
                                    student.className === className.id)?.name
                            }
                        </td>
                        <td>
                            <div className="card-body p-2">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                    onClick={() => getData(student.id)}
                                >
                                    <i className="bi bi-trash3"/>
                                </button>
                            </div>
                        </td>
                        <td>
                            update
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


            {/*    modal xóa*/}
            <div
                className="modal fade"
                id="delete"
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
                            <span className={"text-danger"}>{studentsData?.name}</span>?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" onClick={() => handleDelete()} className="btn btn-primary"
                                    data-bs-dismiss="modal"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}