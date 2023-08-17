export const Peticion = async (url, metodo, datosGuardar = "", archivos = false) => {
  let datos = [];
  let cargando = true;

  cargando = true;
  let opciones = {
    method: "GET",
  };
  if (metodo === "GET" || metodo === "DELETE") {
    opciones = {
      method: metodo,
    };
  }
  if (metodo === "POST" || metodo === "PUT") {
    let body = "";
    if (archivos) {
      opciones = {
        method: metodo,
        body,
      };
    }else{
      opciones = {
        method: metodo,
        body: JSON.stringify(datosGuardar),
        headers: {
          "Content-Type": "application/json",
        }
      };
    }
 
  }
    const peticion = await fetch(url, opciones);
          datos = await peticion.json();
    cargando=false;
   

  return {
    datos,
    cargando,
  }
}