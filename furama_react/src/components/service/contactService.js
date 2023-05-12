import axios from "axios";


export const findAllContact = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/contact`)

        console.log(result.data)
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const createContact = async (contact)=>{
    try {
        const result = await axios.post(`http://localhost:8080/contact` ,{...contact})
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const findByIdContact = async (id) =>{
    try {
        const result=await axios.get(`http://localhost:8080/contact/${id}`)
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const removeContact = async (id)=>{
    debugger
    console.log(id)
    try {
        const result = await axios.delete(`http://localhost:8080/contact/${id}`)
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const editContact =async (contact) =>{
    try {
        const result = await axios.put(`http://localhost:8080/contact/${contact.id}`, {...contact})
        return result.data
    }catch (error) {
        console.log(error)
    }
}