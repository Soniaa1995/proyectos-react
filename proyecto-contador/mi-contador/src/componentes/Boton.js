import React from 'react';
import '../hojas-de-estilo/boton.css';

function Boton({texto, esBotonDeClic, manejarClic}) { //se trata de un proceso de desestructuracion y solo nos referimos a texto sin utilizar los props
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );  
}

export default Boton;