import React from 'react'
import "./Category.css"


const NavCategory = () => {
  return (
    <div className="lista d-none d-lg-block">
    <ul className="d-flex justify-content-center">
      <li className="nav-item m-2">
        <a className="nav-link" href="/#">Inicio</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link" href="#Economia" >Economia</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link" href="#Deportes">Deportes</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link" href="#Sociedad">Sociedad</a>
      </li>
      <li className="nav-item m-2">
        <a className="nav-link" href="#Politica">Politica</a>
      </li>
    </ul>
  </div>
  )
}

export default NavCategory