import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokemonAxios = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(" https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")  
            .then(response => {
                console.log(response);
                setPokemon(response.data.results);
            })
            .catch(error => console.log(error))
    }, []);

  return (
    <div>
        <h2>Pokemon</h2>
            {
            pokemon.map((pokemon, index) => {
                return <p key={index}>{pokemon.name}</p>
            })
            }
    </div>
  )
}

export default PokemonAxios