import logo from './logo.svg';
import './App.css';
import {BookManagementList} from "./components/BookManagementList";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {BookManagementCreate} from "./components/BookManagementCreate";
import {BookManagementEdit} from "./components/BookManagementEdit";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookManagementList/>}/>
                    <Route path="/createBook" element={<BookManagementCreate/>}/>
                    <Route path="/editBook/:id" element={<BookManagementEdit/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
