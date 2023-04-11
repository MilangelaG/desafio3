import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const PokemonInfoPage = () => {
  let { name } = useParams();
  const infoPokemonAPI= "https://pokeapi.co/api/v2/pokemon/"
  const [pokemon, setPokemon] = useState(JSON.parse('{"height": ". . .", "name": "cargando", "sprites":{}}'));
  const navegate = useNavigate();

  const getPokemon = () => {
    fetch(infoPokemonAPI+name)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPokemon(json)
      })
      .catch(error => console.error(error));
  };
  const goBack = () => {
    navegate("/")
  };

  useEffect(getPokemon, []);

  return (
    <div className='pokemon-info-page grid-columns-5 p-3'>
      <h1> {pokemon.name} <small> {pokemon.height}  </small></h1>
      <img src={pokemon.sprites.front_default} alt="" />
      <img src={pokemon.sprites.back_default} alt="" />
      <br/>
      <button onClick={goBack}> Seleccionar otro pokemon </button>
    </div>
    
  )
}

export default PokemonInfoPage