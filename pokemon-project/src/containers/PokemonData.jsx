import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import POKEMON_API_URL from '../config/index'

function PokemonData(props) {
    const params = useParams()
    let [pokemon, setPokemon] = useState()


    useEffect(() => {
        axios.get(`${POKEMON_API_URL}/${params.id}`).then((res)=>{
            setPokemon(pokemon=res.data)
            console.log(pokemon)
        }
        )
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default PokemonData


