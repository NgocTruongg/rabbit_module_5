import axios from "axios";

export const findAll = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/books`)
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const save = async (book) =>{
    try {
         await axios.post(`http://localhost:8080/books`, book)
    } catch (error) {
        console.log(error)
    }
}
export const edit = async (id, book) => {
    try {
        await axios.put(`http://localhost:8080/books/${id}`, {...book});
        alert("Cập nhật thành công!")
    } catch (error) {
        console.log(error);
    }
}

export const findById = async (id) =>{
    try {
        const book = await axios.get(`http://localhost:8080/books/${id}`)
        return book.data
    }catch (error) {
        console.log(error)
    }
}

export const remove = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/books/${id}`)
        alert("Xóa thành công")
    }catch (error) {
        console.log(error)
    }
}
