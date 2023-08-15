import { useEffect, useState } from "react";
import { Global } from "../../helper/Global";
import { Peticion } from "../../helper/Peticion";
import { Listado } from "./Listado";

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const {datos, cargando} = await Peticion(Global.url+"articulos","GET")
  
    console.log(datos);
    if (datos.status === "success") {
      console.log(datos.listado);
      setArticulos(datos.listado);
    }
    setCargando(false)
  };

  return (
    <>
    { cargando ? "Cargando......" :
    (
      articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos}/>
       :
        <h1>No hay articulos</h1>
      
    )
  
    }
   
    </>
  );
};

export default Articulos;
