import UserService from "../../services/UserService";
import {DELETE_USER, GET_ALL_USER} from "./type";


export const getAllUser = () => async (dispatch) =>{
    try {
        const res = await UserService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload : res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const removeUser = (id) => async (dispatch) =>{
    try {
        await UserService.remove(id)
        const res = await UserService.findAll();
        dispatch({
            type: DELETE_USER,
            payload : res.data
        })
    } catch (error) {
        console.log(error)
    }
}