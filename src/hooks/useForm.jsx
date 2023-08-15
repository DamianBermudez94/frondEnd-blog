import {useState} from 'react'

export const useForm = (objetoInicial = {}) => {
    const [datos, setDatos] = useState(objetoInicial);
    const [enviado, setEnviado] = useState(false);
 
    console.log("soy los datos",datos);
    const serializarFormulario = (datos)=>{
        // new FormData: es una libreria de JavaScript para obtener nuevos datos
        const formData = new FormData(datos);
        console.log("Hola,soy los datos del formulario",formData);
        // Inicializamos un objeto vacio para despues rellenar con los nuevos datos
        const objectCompleto = {};
        // Recorremos el formulario para que valla agregando la nueva informacion
        for(let [name,value] of formData){
            objectCompleto[name]= value;
        }
        // Retornamos el objeto con todos los datos del formulario
        return objectCompleto;
    }
    const cambiado =(e)=>{
        // desestructuración del objeto
        //const {name,value} = target;
      console.log("soy el name",e);
        // Actualizamos el estado con el formulario ya establecido y con los datos nuevos
        setDatos({
            // Expandimos los datos que ya habia en el estado y le agregamos la nueva informacion: EJ, name.titulo
            ...datos,
            [e.target.name]: e.target.value
            //[name]:target.value,
        })
   
    }

    const handleSubmit  = (e)=>{
        e.preventDefault()
        /*let curso= {

            titulo: e.target.titulo.value,
            anio: e.target.anio.value,
            autor: e.target.autor.value,
            email: e.target.email.value,
            descripcion: e.target.descripcion.value
        }*/
        if (!datos.titulo === "" || !datos.anio === "" || !datos.autor === "" || !datos.email==="" || !datos.description ==="") {
            let curso = serializarFormulario(e.target);
            setDatos(curso);
            setEnviado(true);
           
        } else {
           alert("por favor rellenar el formulario")
           
        }
            
    }
  
    return{
        datos,
        cambiado,
        handleSubmit,
        enviado
       
    }
}
