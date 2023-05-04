    import './App.css';
import {Navbar} from "./components/Navbar";
import React from "react";
    import {Header} from "./components/Header";
    import {Footer} from "./components/Footer";
    import {ListContact} from "./components/contact/ListContact";
    import {CreateFacility} from "./components/facility/CreateFacility";
    import {ListFacility} from "./components/facility/ListFacility";
    import {ListCustomer} from "./components/customer/ListCustomer";

function App() {
  return (
    <div className="App">
     {/*<Navbar/>*/}
     {/*<Header/>*/}
     {/*<Footer/>*/}
    {/*<ListContact/>*/}
    <ListFacility/>
    {/*<ListCustomer/>*/}
    </div>
  );
}

export default App;
