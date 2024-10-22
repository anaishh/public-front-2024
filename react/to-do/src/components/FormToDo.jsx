import { useState } from "react"
import {v4 as uuidv4} from "uuid"

export default function FormToDo({addtask}) {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit  = (event) => {
    event.preventDefault();

    const newTask ={
      text: inputValue,
      completed: false,
      id: uuidv4()
    }
    addtask(newTask)

  }

  return (
    <form className="form-todo" onSubmit= {handleSubmit}>
      <input className="input-todo"
        placeholder="Escribe una tarea..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        
        />
      <button className="button-todo">Aceptar</button>
    </form>
  )
}