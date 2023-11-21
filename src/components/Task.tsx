import React, { Dispatch, SetStateAction } from 'react'

interface props {
    task: string;
    index: number;
    deleteTask: (index: number) => void;
    setTaskDrag: Dispatch<SetStateAction<string>>;
}

function Task({task, index, deleteTask, setTaskDrag}: props) {

    const handleDelete = function(){
        deleteTask(index);
    }

    function handleDStart(event: any, index: number){
        setTaskDrag(task);
    }

    return (
        <div 
            className="task"
            onDragStart={(e) => handleDStart(e, index)}
            onDragEnd={handleDelete}
            draggable
        >
            {task}
            <button className='btn-delete' type='button' onClick={handleDelete}>X</button>
        </div>
    )
}

export default Task