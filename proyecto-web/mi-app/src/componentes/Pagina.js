import React from "react";
import '../hojas-de-estilos/Pagina.css'

function Pagina(props) {// los props se deficen aqui
  return( //lo de abajo es el contenedor principal
    <div className="contenedor-pagina">
      <img 
      className="imagen-pagina" 
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt="Foto del cliente"/>
      <div className="contenedor-texto-pagina">
        <p className="nombre-pagina">
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-pagina">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-pagina">"{props.texto}"</p>
      </div>
    </div> //describir cual va a ser la estructura de nuestro componente
  );
}

export default Pagina;