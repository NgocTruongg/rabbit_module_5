import axios from "axios";


export const findAllProduct = async () => {
    try {
        let result = await axios.get(`http://localhost:8080/products`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:8080/type`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const createProduct = async (product) =>{
    try {
        let result=await axios.post(`http://localhost:8080/product`, {...product})
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const updateProduct = async (product) => {
    console.log(product)
    try {
        await axios.put(`http://localhost:8080/product/${product.id}`, {...product})
        console.log(product)
    } catch (error) {
        console.log(error)
    }
}


export const findByIdProduct = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/product/${id}`)
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const removeProduct=async (id)=>{
    try {
        let result= await axios.delete(`http://localhost:8080/product/${id}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}