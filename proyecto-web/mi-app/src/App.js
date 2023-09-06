import './App.css';
import Pagina from './componentes/Pagina';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Nuevos clientes de nuestra página</h1>
      <Pagina 
        nombre="Homer Simpson"
        pais="Sprinfield"
        imagen="homer"
        cargo="Inspector de seguridad"
        empresa="la Central Nuclear"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      <Pagina
      nombre="Lisa Simpson"
      pais="Sprinfield"
      imagen="lisa"
      cargo="Estudiante"
      empresa="la escuela primaria de Sprinfield"
      texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Pagina 
      nombre="Bart Simpson"
      pais="Sprinfield"
      imagen="bart"
      cargo="Es un vándalo y estudiante"
      empresa="la ciudad de Sprinfield"
      texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      </div>
    </div>
  );
}

export default App;
