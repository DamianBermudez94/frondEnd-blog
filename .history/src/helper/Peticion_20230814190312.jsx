export const Peticion = async (url, metodo, datosGuardar = "") => {
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
          datos = await peticion.json();
    cargando=false;
    console.log(datos);
  }
  return {
    datos,
    cargando,
  };
};
