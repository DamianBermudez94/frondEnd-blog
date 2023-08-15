

export const Ajax = async (url, metodo, datosGuardar = "") => {
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
      opciones = {
        method: metodo,
        body: JSON.stringify(datosGuardar),
        headers: {
          "Content-Type": "application/json",
        },
      };
    
    const peticion = await fetch(url);
    const data = await peticion.json();
    datos = data,
    cargando = false
  };
 return{
  datos,
  cargando
 }
};
