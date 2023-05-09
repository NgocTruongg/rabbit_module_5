import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllUser, removeUser} from "../redux/action/user";

export function UserComponent() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser())
    }, [])

    const handleDelete = async (id) => {
        dispatch(removeUser(id))
    }

    return (
        <>
            <div>
                <h1 className="text-center">USER LIST</h1>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>WEBSITE</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(user.id)}>Xoá
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}