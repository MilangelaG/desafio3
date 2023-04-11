import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar bg-dark navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/"> Pokedeck </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar



