import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {Product} from "./components/Product";
import {UpdateProduct} from "./components/UpdateProduct";
import {CreateProduct} from "./components/CreateProduct";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/product" element={<Product/>}/>
              <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
              <Route path='/createProduct' element={<CreateProduct/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
