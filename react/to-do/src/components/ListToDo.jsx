import FormToDo from "./FormToDo";
import { useState } from "react";

export default function ListToDo () {

  const [tasks, setTasks] = useState([]);

  function addTask(newTask){
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  return (<>
    <FormToDo addtask={addTask}></FormToDo>
    <div className="list-todo container">
      {tasks.map(task =><div key={task.id}>{task.text}</div>)}
    </div>
  </>)
}
