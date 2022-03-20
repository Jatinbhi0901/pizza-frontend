import "./App.css";
import Personalinfo from "./Components/Personalinfo";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={ <Login/>}/>    
            <Route path="/register" element={ <Register/>}/>
            <Route path="/personalinfo" element={ <Personalinfo/>}/>     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
