import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import * as contactService from "../service/contactService";
import {Formik} from "formik";


export function EditContact() {
    const [contact, setContact] = useState()
    const pragma = useParams()

    useEffect(() =>{
        const data = async ()=>{
            let result = await contactService.findByIdContact(pragma.id)
            setContact(result)
        }
        data()
    },[pragma.id])

    if (!contact){
        return null
    }

    return (
        <>
            <Formik initialValues={{
                id: contact?.id,
                contactCode: contact.contactCode,
                startDate: contact.startDate

            }}
            >

            </Formik>
        </>
    )
}