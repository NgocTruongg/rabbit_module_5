import React, {useEffect, useState} from "react";
import * as bookManagementService from "../services/bookManagementService";
import {Link} from "react-router-dom";

export function BookManagementList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookManagementService.findAll()
            debugger
            setBooks(result)
        }
        fetchApi()
    }, [])
    const handleDelete = async (id) =>{
        await bookManagementService.remove(id)
        let result = await bookManagementService.findAll()
        setBooks(result);
    }
    if (!books){
        return null;
    }

    return (
        books && <>
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-1 col-md-10">
                        <div className="panel">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12">
                                        <Link to={"/createBook"} className="btn btn-sm btn-primary pull-left"><i
                                            className="fa fa-plus-circle"></i> Thêm mới sách</Link>
                                        <div className="panel-body table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Quantity</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    books.map((book) => (
                                                        <tr key={book.id}>
                                                            <td>{book.id}</td>
                                                            <td>{book.title}</td>
                                                            <td>{book.quantity}</td>
                                                            <td>
                                                                <Link to={`/editBook/${book.id}`} className="btn btn-primary">Chỉnh sửa</Link>
                                                                <a onClick={() => handleDelete(book.id)} className="btn btn-danger">Xóa</a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}