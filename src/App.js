import React, { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes, Link } from "react-router-dom";
// import Details from "./components/Details/Details";
import Login from "./components/Login/Login";
const Details = lazy(() => import("./components/Details/Details"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>LOADING</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
