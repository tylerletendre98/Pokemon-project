import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import axios from 'axios'
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => {
  const [pokemonData, setpokemonData] = useState([]);
  useEffect(() => {
    axios.get(`${POKEMON_API_URL}?limit=100`).then((res) => {
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
        <Grid container spacing={2}>
          {pokemonData.map((pokemon)=>{
            return(
             <PokemonCard  pokemon={pokemon}  image={pokemon.url}/>
            )
          })}
        </Grid>
      ) : (
        <CircularProgress style={{marginTop:100}} />
      )}
    </Box>
  );
};

export default Pokedex;
