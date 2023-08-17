import {Global} from "../../helper/Global"

export const Listado = ({articulos, setArticulos}) => {
  return (
    articulos.map((articulo) => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className="articulo-img">
            {articulos.imagen && <img
                src={Global.url+ "imagen "+ articulos.imagen}
                alt=""
              />}
              {!articulos.imagen && <img
                src="https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png"
                alt=""
              />}
              
            </div>
            <div className="articulo-datos">
              <h3 className="title-articulo">{articulo.titulo}</h3>
              <p className="parrafo-articulo">
                {articulo.contenido}
              </p>
              <button className="articulo-borrar">borrar</button>
              <button className="articulo-editar">editar</button>
            </div>
          </article>
        );
      })
  )
}
