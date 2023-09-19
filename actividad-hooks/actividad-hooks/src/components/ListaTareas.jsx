import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const initialState = [{
    id: new Date().getDate(),
    tarea: 'Explicar Reducers',
    finalizada: false
}];


const tareaReducer = (state = initialState, action = {}) => { //comprueba las acciones con el estado inicial
    switch(action.type){
        case'[TAREAS] Agregar Tarea':
            return [...state, action.payload];
        case'[TAREAS] Finalizar Tarea':
            return state.map(tarea => {
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        finalizada: tarea.finalizada
                    }
                }return tarea;
            })
        case'[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case'[TAREAS] Borrar Tareas':
            return action.payload
        default:
            return state;
    }
}


export const ListaTareas = () => {
    const [tareasState, dispach] = useReducer(tareaReducer, initialState)

    const {tarea, formState, onInputChange} = useForm({tarea:''});

    const agregarTarea = (event) => {
        event.preventDefault();
        if(formState.tarea == '') return //si esta vacio que no devuelva nada
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }

        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispach(action);
    }

    const finalizarTarea = ({id}) => {
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispach(action)
    }

    const eliminarTarea = ({id}) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispach(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
            payload: []
        }
        dispach(action)
    }

  return (
    <>
        <form onSubmit={agregarTarea}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name="tarea" 
                    placeholder="Ingresa tarea"
                    value = {tarea}
                    onChange={onInputChange} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
        </form>

        <hr />

        <ul className="list-group">
            {tareasState.map(item => {
                return (
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <span>{item.tarea}</span>
                        <div>
                            <input type="checkbox" value={item.finalizada} onChange={() => finalizarTarea(item)} />
                            <button className="btn btn-danger" onClick={() => eliminarTarea(item)}>Borrar</button>
                        </div>
                    </li>
                )
            })}
        </ul> 
    </>
  )
}
