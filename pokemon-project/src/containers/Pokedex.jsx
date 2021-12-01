import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";

const Pokedex = () => {
  const [pokemonData, setpokemonData] = useState([]);
  useEffect(() => {
    axios.get(`${POKEMON_API_URL}?limit=800`).then((res) => {
      if (res.status >= 200 && res.status < 3000) {
        const { results } = res.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setpokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <Box>
      {pokemonData ? (
        pokemonData.map((pokemon) => {
          return <h1>{pokemon.name}</h1>;
        })
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Pokedex;
