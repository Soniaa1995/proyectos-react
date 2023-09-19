import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
    
      const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
          ...formState, 
          [name]: value //para que se modifique el nombre hay que ponerlo entre corchetes
        })   
      }

  return {
    ...formState,
    formState,
    onInputChange
  }
}
