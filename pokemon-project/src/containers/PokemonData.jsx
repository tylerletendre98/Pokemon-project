import axios from 'axios'
import React, { Component } from 'react'
import POKEMON_API_URL from '../config/index'

export default class PokemonData extends Component {
constructor(props){
    super(props)
        this.state={
            pokemon: null
        
    }
}

componentDidMount(){
    const { match } = this.props;
    const {id} = match?.parmas;
    axios.get(`${POKEMON_API_URL}/${id}`).then((res)=>{
        if (res.status>=200 && res.status < 300){
            console.log(res.data)
            this.setState({pokemon: res.data})
        }
    })
}

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
