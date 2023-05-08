
import axios from "axios";
export const findAll = async () =>{
    try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
        return result.data
    }catch (error) {
        console.log(error)
    }
}
export const save = async (todoList) =>{
    try {
        const result = await axios.post("https://jsonplaceholder.typicode.com/todos",todoList)
        return result.data
    } catch (error) {
        console.log(error)
    }
}