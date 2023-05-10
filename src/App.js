import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import SignUp from './pages/signup';
import Login from './pages/login';
import Profile from './pages/profile';
import AddMood from './pages/addMood';
// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} /> 
        <Route exact path="/addMood" element={<AddMood />} />           
      </Routes>
    </div>
  );
}


export default App;
