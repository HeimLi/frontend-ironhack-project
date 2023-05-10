import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/profile';
import AddMood from './pages/addMood';

// import { useState } from "react";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/profile" element={<Profile />} /> 
        <Route exact path="/addMood" element={<AddMood />} />
      </Routes>
    </div>
  );
}


export default App;
