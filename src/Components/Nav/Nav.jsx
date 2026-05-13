import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <ul className='nave'>
        <li><a href="/AllCharacters">Inicio</a></li>
        <li><a href="/Filtrar">Filtrar especie</a></li>
      </ul>
    </nav>
  )
}

export default Nav
