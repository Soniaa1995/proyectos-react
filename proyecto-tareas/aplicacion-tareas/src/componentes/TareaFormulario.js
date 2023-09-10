import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  
  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    /*Extraer el valor del campo de texto que introduce el usuario*/
    setInput(e.target.value);
  }
    
  /*se llama cuando se trate de enviar el formulario, dandole click a agregarTarea*/ 
  const manejarEnvio = e => {
    e.preventDefault(); /*No se cargue de nuevo la aplicacion cuando enviamos el formulario*/
    const tareaNueva = {
      id: uuidv4(), /*id unico*/
      texto: input,
      completada: false
    }
    /*nos permite enviar esa tarea nueva*/
    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;