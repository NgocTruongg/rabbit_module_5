
import axios from "axios";

export const findAllStudent = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/student`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const findAllClassName = async ()=>{
    try {
        let result =await axios.get(`http://localhost:8080/className`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const findAllGender =async () =>{
    try {
        let result = await axios.get(`http://localhost:8080/gender`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const findByIdStudent= async (id)=>{
    try {
        const result=await axios.get(`http://localhost:8080/student/${id}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const createStudent = async (student) =>{
    try {
        let result=await axios.post(`http://localhost:8080/student`, {...student})
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const updateStudent = async(student)=>{
    try {
        let request=await axios.put(`http://localhost:8080/student/${student.id}`, {...student})
        return request.data
    }catch (e) {
        console.log(e)
    }
}

export const removeStudent = async (id)=>{
    try {
        let result = await axios.delete(`http://localhost:8080/student/${id}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}