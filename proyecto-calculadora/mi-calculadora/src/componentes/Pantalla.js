import React from "react";
import '../hojas-de-estilo/Pantalla.css'

//definimos una funcion con una constante
const Pantalla = ({input}) => ( //retornamos el valor dentro del div
  <div className="input">
    {input}
  </div>
);

export default Pantalla;