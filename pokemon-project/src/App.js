import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
const App = () => {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </Router>
  );
};

export default App;
