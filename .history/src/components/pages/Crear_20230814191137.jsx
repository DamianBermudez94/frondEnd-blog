

export const Crear = () => {
  return (
    <div className="jumbo">
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
        <input type="button" value="Guardar" />
      </form>
    </div>
  );
};
