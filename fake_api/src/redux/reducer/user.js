import {GET_ALL_USER,DELETE_USER} from "../action/type"

const initialState =[]
const userReducer = (users = initialState,action) => {
    const {type, payload} = action
    switch (type) {
        case GET_ALL_USER:
            return payload
        case DELETE_USER:
            return payload
        default:
            return users
    }
}
export default userReducer