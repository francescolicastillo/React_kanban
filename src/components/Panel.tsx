import React, { Dispatch, SetStateAction, useState } from 'react'
import Task from './Task';
import '../styles/panel.css';

interface props {
  taskDrag: string;
  setTaskDrag: Dispatch<SetStateAction<string>>;
}

function Panel({taskDrag, setTaskDrag}: props) {

  const[task, setTask] = useState("");
  const[taskList, setTaskList] = useState([] as Array<string>);

  const handleSubmit = function(event: any){
    event.preventDefault();
    setTaskList([...taskList,task]);
    setTask("");
  }

  function deleteTask(index: number) {
    taskList.splice(index, 1);
    setTaskList([...taskList]);
  }

  function onDrops(){
    setTaskList([...taskList, taskDrag]);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
  }
  
  return (
    <div className="panel" 
      onDrop={onDrops}
      onDragOver={handleDragOver}
    >
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name='newTask' value={task} onChange={(e) => setTask(e.target.value)}/>
      </form>
      { taskList.map((task, index) => (
        <Task 
          task={task} 
          key={index}
          index={index}
          deleteTask={deleteTask}
          setTaskDrag={setTaskDrag}
        /> 
      ))}
    </div>
  )
}

export default Panel