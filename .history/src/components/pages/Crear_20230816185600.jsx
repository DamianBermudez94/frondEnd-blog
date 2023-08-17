import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import {Peticion} from "../../helper/Peticion";
import {Global} from "../../helper/Global"
export const Crear = () => {
  const { formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const guardarArticulo = async (e)=>{
    e.preventDefault();
    let nuevoArticulo = formulario;
    console.log("soy los nuevos datos",nuevoArticulo);
    const datos = await Peticion(Global.url+"crear","POST", nuevoArticulo);
    console.log("Holis",datos);
    if (datos.status === "success") {
      
      setResultado("guardado");
      alert("Los datos se han guardado correctamente")
      console.log("Hola mundo!",datos);
    } else {
      setResultado("error")
      alert("Los datos enviados son incorrectos")
      console.log("Hola perro",datos);
    }
    console.log(datos);
  }
  return (
    <div className="jumbo">
      <h1>Crear articulos</h1>
      <p>Formulario para crear articulos</p>
  
      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="grup-form">
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" onChange={cambiado}/>
        </div>
        <div className="grup-form">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="textarea" name="contenido" onChange={cambiado}/>
        </div>
        <div className="grup-form">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file"/>
        </div>
        <input type="submit" value="Guardar" className="btn btn-succes" />
      </form>
    </div>
  );
};
