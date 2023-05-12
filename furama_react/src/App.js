import './App.css';
import React from "react";
import {Header} from "./home/Header";
import {ListContact} from "./components/contact/ListContact";
import {CreateFacility} from "./components/facility/CreateFacility";
import {ListFacility} from "./components/facility/ListFacility";
import {ListCustomer} from "./components/customer/ListCustomer";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import {EditCustomer} from "./components/customer/EditCustomer";
import {UpdateFacility} from "./components/facility/UpdateFacility";
import {CreateContract} from "./components/contact/CreateContract";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/facility" element={<ListFacility/>}/>
                <Route path="/customer" element={<ListCustomer/>}/>
                <Route path="/contact" element={<ListContact/>}/>
                <Route path="/createFacility" element={<CreateFacility/>}/>
                <Route path="/createCustomer" element={<CreateCustomer/>}/>
                <Route path="/creteContact" element={<CreateContract/>}/>
                <Route path='/editCustomer/:id' element={<EditCustomer/>}/>
                <Route path='/editFacility/:id' element={<UpdateFacility/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
