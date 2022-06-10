import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import { data } from "./data";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />

      {/* <section className="cards-list">{cards}</section> */}
    </div>
    //
  );
}
