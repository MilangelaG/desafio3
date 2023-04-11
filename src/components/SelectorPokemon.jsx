import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const SelectorPokemon = () => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const pokemon_API = "https://pokeapi.co/api/v2/pokemon"

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
    navigate("/pokemon/" + event.target.value)
  };

  useEffect(() => {
    fetch(pokemon_API)
      .then(response => response.json())
      .then(json => {setData(json.results)})
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='selector_pokemon'>
      <hr />
      <h5>Selecciona un pokemon</h5>
      <select className="form-select" value={selected} onChange={handleChange}>
        <option value="0" key="0" selected>  </option>
        {data.map((pokemon, index) => (
          <option value={pokemon.name} key={pokemon.name}> {pokemon.name} </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorPokemon