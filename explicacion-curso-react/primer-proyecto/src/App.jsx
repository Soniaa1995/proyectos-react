import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Item = ({nombre, visto}) => {
  return (
    <li>
      {nombre}
      {visto ? '✅' : '⛔'}
    </li>
  )
}

export const App = (props) => {

  let listadoSecciones = [
      {id: 0, nombre: 'ejemplo 1', visto: true},
      {id: 1, nombre: 'ejemplo 2', visto: true},
      {id: 2, nombre: 'ejemplo 3', visto: true},
      {id: 3, nombre: 'ejemplo 4', visto: true},
      {id: 4, nombre: 'ejemplo 5', visto: true},
      {id: 5, nombre: 'ejemplo 6', visto: true},
      {id: 6, nombre: 'ejemplo 7', visto: false},
      {id: 7, nombre: 'ejemplo 8', visto: false},    
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAgregarTarea = (val) => {
    let valor = val.trim();
    if(valor < 1) return //si se cumple se sale del metodo
    const envio = {
        id: arreglo.length,
        nombre: valor,
        visto: false 
    }
    setArreglo([...arreglo, envio])

  } 

  return (
    <>
      <h1>Ejemplo de listado</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
      </ol>
    </>
  )
}


