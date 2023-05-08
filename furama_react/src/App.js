    import './App.css';
import {Navbar} from "./components/Navbar";
import React from "react";
    import {Header} from "./components/Header";
    import {Footer} from "./components/Footer";
    import {ListContact} from "./components/contact/ListContact";
    import {CreateFacility} from "./components/facility/CreateFacility";
    import {ListFacility} from "./components/facility/ListFacility";
    import {ListCustomer} from "./components/customer/ListCustomer";
    import {CreateCustomer} from "./components/customer/CreateCustomer";
    import {EditCustomer} from "./components/customer/EditCustomer";
    import {UpdateFacility} from "./components/facility/UpdateFacility";
    import {CreateContract} from "./components/contact/CreateContract";

function App() {
  return (
    <div className="App">
     {/*<Navbar/>*/}
     {/*<Header/>*/}
     {/*<Footer/>*/}
    {/*<ListContact/>*/}
    {/*<ListFacility/>*/}
    {/*<ListCustomer/>*/}
    {/*<EditCustomer/>*/}
    {/*<CreateCustomer/>*/}
    {/*<CreateFacility/>*/}
    {/*<UpdateFacility/>*/}
    <CreateContract/>
    </div>
  );
}

export default App;
