import React from 'react'

const Articulos = () => {
  return (
    <article className='articulo-item'>
      <div className='articulo-img'>
        <img src="https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png" alt="" />
      </div>
      <div className='articulo-datos'>
        <p className='parrafo-articulo'>Articulo sobre el mundo del desarrollo web</p>
        <button className='button-articulo'>borrar</button>
        <button className='button-articulo'>editar</button>
      </div>
      
    </article>
    
  )
}

export default Articulos