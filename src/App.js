import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import SolarSystem from "./pages/SolarSystem";
import Sun from "./pages/Sun";
import Moon from "./pages/Moon";
import Mars from "./pages/Mars";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar-system" element={<SolarSystem />} />
          <Route path="/sun" element={<Sun />} />
          <Route path="/moon" element={<Moon />} />
          <Route path="/mars" element={<Mars />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;