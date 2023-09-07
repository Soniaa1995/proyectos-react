import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '='); // isNAN  = si no es un numero
  };

  return (
    
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} /* crear cadena de caracteres en js para definir el resultado | trimEnd quita los espacios del final d euna cadena */
      onClick={() => props.manejarClic(props.children)}>  
      {props.children} 
    </div>
  );
}

export default Boton;