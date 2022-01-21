import React, { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes, Link } from "react-router-dom";
const Details = lazy(() => import("./components/Details/Details"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>LOADING</div>}>
        <Routes>
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
