
import { useEffect, useState } from 'react';

const Articulos = () => {
  const [] = useState([])


  return (
    <article className='articulo-item'>
      <div className='articulo-img'>
        <img src="https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png" alt="" />
      </div>
      <div className='articulo-datos'>
        <h3 className='title-articulo'>JavaScript</h3>
        <p className='parrafo-articulo'>Articulo sobre el mundo del desarrollo web</p>
        <button className='articulo-borrar'>borrar</button>
        <button className='articulo-editar'>editar</button>
      </div>
      
    </article>
    
  )
}

export default Articulos