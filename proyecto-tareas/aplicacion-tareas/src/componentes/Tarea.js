import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
          onClick={() => completarTarea(id)}>
          {texto}
      </div>
      {/* logo icono */}
      <div className='tarea-contenedor-iconos'
            onClick={() => eliminarTarea(id)}> 
      {/* los definimos como componentes de React */}
        <AiOutlineCloseCircle className='tarea-icono'/>{/* estamos pasando un prop */}
      </div>
    </div>
  );
}

export default Tarea;