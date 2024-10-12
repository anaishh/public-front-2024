
import './App.css'
import Counter from './components/Counter.jsx'
import { useState } from 'react'


function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    return setCounter(prev => prev + 1);
  }
  
  return (
    <>
      <Counter>{counter}</Counter>
      <button onClick={handleClick} >Aceptar</button>
    </>
  )
}

export default App
