

export const Crear = () => {
  return (
    <div className="jumbo">
      <h1>Crear articulos</h1>
      <p>Formulario para crear articulos</p>
      <form>
        <div className="grup-form">
          <label htmlFor="">Titulo</label>
          <input type="text" />
        </div>
        <div className="grup-form">
          <label htmlFor="">Contenido</label>
          <input type="textarea"/>
        </div>
        <div className="grup-form">
          <label htmlFor="">Imagen</label>
          <input type="file" />
        </div>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
