import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes, Link } from "react-router-dom";
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
