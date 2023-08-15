import { useState } from "react"

export const useAjax = (url)=>{

    const [estado, setEstado] = useState({
        datos:null,
        cargando : false,
    });

}