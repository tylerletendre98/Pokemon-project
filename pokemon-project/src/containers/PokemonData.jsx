import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { CircularProgress } from '@material-ui/core'
import POKEMON_API_URL from '../config/index'

function PokemonData(props) {
    const params = useParams()
    let [pokemon, setPokemon] = useState()


    useEffect(() => {
        axios.get(`${POKEMON_API_URL}/${params.id}`).then((res)=>{
            setPokemon(pokemon = res.data)
            console.log(pokemon)
            
        })
    }, [])

    if(pokemon !== undefined){
        return (
            <div>
                <CircularProgress style={{marginTop:100}} />
            </div>
        ) 
    }else{
        return(
            <div>
                <h1>loaded</h1>
            </div>
        )
    }
}

export default PokemonData


