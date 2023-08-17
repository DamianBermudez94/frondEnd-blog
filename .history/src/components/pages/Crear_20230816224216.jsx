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

      //Obtener la imagen del input
    const file = document.querySelector("#file")
    if (datos.status === "success" && file.files[0]) {
      setResultado("guardado");

      //Creamos un formData para guardar la imagen
      const formData = new FormData();

      //Guardamos la imagen con el name del input y seleccionando el archivo del files
      formData.append("file0",file.files[0]);

      // Hacemos la peticion para poder guardar la imagen en la Base de Datos
      const imgSubir = await Peticion(Global.url+"/subir-imagen/"+datos.articulo._id,"POST", formData ,true);

      console.log("soy la imagen",imgSubir.datos);
      //Chequeamos que la imagen se haya subido con el formato correcto
      if (imgSubir.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }
    } else {
      setResultado("error");
    }
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
