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
import VegPizza from "./Components/VegPizza";
import NonVegPizza from "./Components/NonVegPizza";
import Bestsellers from "./Components/Bestsellers";
import Beverages from "./Components/Beverages";
import Desserts from "./Components/Dessert";
import PartyCombos from "./Components/PartyCombos";
import LandingPage from "./Components/LandingPage";
import Transition from "./Components/Transition";





function App() {

// const [cart, setCart]= useState([])
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login/>}/>
            <Route path="/login" element={ <Login/>}/>    
            <Route path="/register" element={ <Register/>}/> 
            <Route path="/navigationbar" element={ <Navigationbar/>}/>
            <Route path="/landingpage" element={ <LandingPage/>}/>
            <Route path="/homepage" element={ <Homepage/>} />
            <Route path="/bestsellers" element={ <Bestsellers/>} />
            <Route path="/vegpizza" element={ <VegPizza/>} />
            <Route path="/nonvegpizza" element={ <NonVegPizza/>} />
            <Route path="/beverages" element={ <Beverages/>} />
            <Route path="/desserts" element={ <Desserts/>} />
            <Route path="/partycombos" element={ <PartyCombos/>} />

           
            
            <Route path="/footer" element={ <Footer/>}/> 
            <Route path="/menu" element={ <Menu/>}/> 
            <Route path="/profile" element={ <Profile/>}/> 
            <Route path="/cart" element={ <Cart/>}/> 
            <Route path="/transition" element={ <Transition/>} />
            

            <Route path="/imp" element={ <QWER/>}/> 
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
