import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
import PokemonData from "./containers/PokemonData";
const App = () => {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
        <Route exact path="/pokemon/:id" element={<PokemonData />} />
      </Routes>
    </Router>
  );
};

export default App;
