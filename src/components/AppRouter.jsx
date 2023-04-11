import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PokemonInfoPage from '../pages/PokemonInfoPage'
import SelectorPokemon from '../components/SelectorPokemon.jsx'


const AppRouter = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='*' element={<SelectorPokemon />} />
        <Route path="pokemon/:name" element={<PokemonInfoPage />} />
      </Routes>
    </div>
  )
}

export default AppRouter