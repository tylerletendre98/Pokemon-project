import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import About from "./containers/About";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
