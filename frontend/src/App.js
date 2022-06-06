import React from "react";
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from "./components/serviceone";
import Homepage from "./componentstwo/homepage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="service" element={<Service />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
