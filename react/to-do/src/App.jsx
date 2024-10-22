import Logo from './components/Logo.jsx'
import ListToDo from './components/ListToDo.jsx'
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <Logo />
      <div className="todo-list">
      <h1>Mis tareas</h1>
      <ListToDo></ListToDo>
      </div>
    </div>
  )
}