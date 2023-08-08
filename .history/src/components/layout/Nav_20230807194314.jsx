import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
           <nav className="nav">
            <ul>
                <li><NavLink to="/#">Inicio</NavLink></li>
                <li><NavLink to="/crear">Crear</NavLink></li>
                <li><NavLink to="/articulos">Articulos</NavLink></li>
                <li><NavLink to="/articulo">Articulo</NavLink></li>
                <li><NavLink to="/busqueda">Busqueda</NavLink></li>
               
            </ul>
        </nav>
    </div>
  )
}
