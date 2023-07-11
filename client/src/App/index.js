/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";
import { Home } from "../components/Home";
import { NewDog } from "../components/NewDog";
import { Detail } from "../components/Detail";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

function App() {
  return (
    <>
      {useLocation().pathname === "/" ? <></> : <Nav />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/new-dog" element={<NewDog />} />
      </Routes>
      {useLocation().pathname === "/" ? <></> : <Footer />}
    </>
  );
}

export default App;
