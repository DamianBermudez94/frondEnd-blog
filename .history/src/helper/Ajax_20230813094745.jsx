

export const Ajax = (url, metodo, datosGuardar = "") => {
 

  const getData = async () => {
    setEstado({
      ...estado,
      cargando: true,
    });
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
    }
    const peticion = await fetch(url);
    const data = await peticion.json();
    setEstado({
      datos: data,
      cargando: false,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);
};
