import { useEffect, useState } from "react";
import { Global } from "../../helper/Global";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url+"articulos/";
    let peticion = await fetch(url, { method: "GET" });
    const datos = await peticion.json();
    console.log(datos);
    if (datos.status === "success") {
      console.log(datos.listado);
      setArticulos(datos.listado);
    }
  };

  return (
    <>
      {
      articulos.length >= 1 ? (
        articulos.map((articulo) => {
          return (
            <article key={articulo._id} className="articulo-item">
              <div className="articulo-img">
                <img
                  src="https://cms.rootstack.com/sites/default/files/inline-images/javascript%20logo.png"
                  alt=""
                />
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
      ):(
        <h1>No hay articulos</h1>
      )
}
    </>
  );
};

export default Articulos;
