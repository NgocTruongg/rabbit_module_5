import axios from "axios";


export const findAllFacility = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/facility`)
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const findById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/facility/${id}`)
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const createFacility = async (facility) => {
    try {
        const result = await axios.post(`http://localhost:8080/facility`,{...facility})
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const editFacility = async (facility) =>{
    try{
        const result = await axios.put(`http://localhost:8080/facility/${facility.id}`,{...facility})
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const removeFacility = async (id) =>{
    try {
        const result = await axios.delete(`http://localhost:8080/facility/${id}`)
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const findAllRental = async () =>{
    try{
        const result = await axios.get(`http://localhost:8080/rentals`)
        return result.data
    }catch (error) {
        console.log(error)
    }
}

export const findAllTypeRoom = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/typeRooms`)
        return result.data
    }catch (error) {
        console.log(error)
    }
}
