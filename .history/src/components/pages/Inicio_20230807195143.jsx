import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
        <h1>Bienevidos al blog con React</h1>
        <p>Blog desarrollado con el MERN Stack (Mongo, Express, React y NodJS)</p>
        <Link to="/articulos" className='button'>Ver los articulos</Link>

    </div>
  )
}
