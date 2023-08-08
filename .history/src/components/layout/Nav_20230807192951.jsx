import React from 'react'

export const Nav = () => {
  return (
    <div>
           <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/crear">Crear</a></li>
                <li><a href="/articulos">Articulos</a></li>
                <li><a href="/articulo">Articulo</a></li>
                <li><a href="/busqueda">Busqueda</a></li>
                <li><a href="/editar">Editar</a></li>
            </ul>
        </nav>
    </div>
  )
}
