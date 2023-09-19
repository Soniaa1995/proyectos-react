import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"

export const CallBackComponent = () => {

  const [counter, setCounter] = useState(0)
  
  const incrementarPadre = useCallback((val) => { //solo memoriza la funcion
    setCounter(contador => contador + val)
  }, []
  )

  return (
    <>
      <h1>Contador: {counter}</h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  )
}
