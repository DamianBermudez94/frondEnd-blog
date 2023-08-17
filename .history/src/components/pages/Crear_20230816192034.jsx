import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import {Peticion} from "../../helper/Peticion";
import {Global} from "../../helper/Global"
export const Crear = () => {
  const { formulario, cambiado} = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const guardarArticulo = async (e)=>{
    e.preventDefault();
    let nuevoArticulo = formulario;
    console.log("soy los nuevos datos",nuevoArticulo);
    const {datos} = await Peticion(Global.url+"crear","POST", nuevoArticulo);
    console.log("Holis",datos);
    if (datos.status === "success") {
      setResultado("guardado");
      //Obtener la imagen del input
      const file = document.querySelector("#file")
   
    } else {
      setResultado("error")

     
    }
    console.log(datos);
  }
  return (
    <div className="jumbo">
      <h1>Crear articulos</h1>
      <p>Formulario para crear articulos</p>
  
      <strong>{resultado == "guardado" ? "Los datos de guardaron correctamente" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos son invalidos" : ""}</strong>
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
