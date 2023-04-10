import './App.css'
import React,{ useState, useEffect } from 'react';


const App = () => {
  const [data, setData] = useState([]);

  const APIUrl = "https://pokeapi.co/api/v2/pokemon"
  const APINombres= "https://pokeapi.co/api/v2/pokemon/"
  const pokemonSeleccionado = "pikachu"
  const [pokemonenuso, setPokemon] = useState(0);
  
  
  useEffect(() => {
    fetch(APIUrl)
      .then(response => response.json())
      .then(json => {setData(json.results)})
      .catch(error => console.error(error));

      fetch(APINombres+pokemonSeleccionado)
      .then(response => response.json())
      .then(json => {setPokemon(json.weight)})
      .catch(error => console.error(error));

  }, []);


  return (
    <div>
      <select>
      {data.map((pokemon, index) => (
        <option value={index}> {pokemon.name} </option>
     ))}
     </select>

       <h1>{pokemonenuso}</h1> 
      
  </div>
  )
}

export default App