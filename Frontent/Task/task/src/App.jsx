
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import User from "./components/User"

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
         <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
