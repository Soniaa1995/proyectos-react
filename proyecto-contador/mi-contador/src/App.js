import './App.css';
import Boton from './componentes/Boton';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); //valor inicial del numero de clics

  const manejarClic = () => {
    setNumClics(numClics + 1); //actualiza
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freecodecampLogo}
          alt='Logo del la pagina'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
