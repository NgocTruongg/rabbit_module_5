import {ErrorMessage,Field,Form,Formik} from "formik";
import * as Yup from "yup"
import React, {useEffect, useState} from "react";
import * as TodoListService from "../services/TodoListService";


export function TodoList() {
    const [todoLists, setTodoList] = useState([])
    useEffect(() =>{
        const fetchApi = async () =>{
            let result = await TodoListService.findAll()
            return result.data
        };
        fetchApi();
    },[]);

    return (
        <>
            <Formik initialValues={{
                title: ""
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("Không được để trống!")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        const create = async () => {
                            await TodoListService.save(values);
                            let result = await TodoListService.findAll();
                            setTodoList(result);
                            setSubmitting(false);
                            alert('Thêm mới thành công');
                        }
                        create();
                    }}>
                <Form>
                    <Field type="text" name="title" id="title" className="form-control"/>
                    <ErrorMessage style={{color: "red"}} name="title" component='span' className='form-err'/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <ul>
                {todoLists.map((todoList, index) => (
                    <li key={index}>
                        {todoList.title}
                    </li>
                ))}
            </ul>
        </>
    )
}