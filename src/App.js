import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navigationbar from "./Components/Navigationbar";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer"
import Menu from "./Components/Menu"
import QWER from "./Components/Imp"
import  Profile from "./Components/Profile";
import  Cart from "./Components/Cart";
import { useState } from "react";
import Bestsellers from "./Components/Bestsellers";



function App() {

const [cart, setCart]= useState([])
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={ <Login/>}/>    
            <Route path="/register" element={ <Register/>}/> 
            <Route path="/navigationbar" element={ <Navigationbar/>}/> 
            <Route path="/homepage" element={ <Homepage/>} />
            
            <Route path="/footer" element={ <Footer/>}/> 
            <Route path="/menu" element={ <Menu/>}/> 
            <Route path="/profile" element={ <Profile/>}/> 
            <Route path="/cart" element={ <Cart/>}/> 
            

            <Route path="/imp" element={ <QWER/>}/> 
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
