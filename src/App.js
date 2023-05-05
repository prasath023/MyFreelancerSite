import React, { useState } from 'react'
import './App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Cart';
import Form from './components/Form';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  const [userRequirements,setUserRequirements]=useState('')
  const handleAddToCart=(requirements)=>{
    setUserRequirements(requirements)
  }

  return (
    <BrowserRouter>
   
   <div className="app">
  <Routes>
 
      <Route path="/" exact element={<Home handleAddToCart={handleAddToCart} userRequirements={userRequirements} />} />
      <Route path="/cart" exact element={<Cart userRequirements={userRequirements} />} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />


  </Routes>
  </div>

</BrowserRouter>
   
  );
}

export default App;
