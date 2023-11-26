import React, { useState } from 'react';
import Panel from './components/Panel';
import './styles/app.css'

function App() {

  const [taskDrag, setTaskDrag] = useState("");
  const [panelNr, setPanelNr] = useState(0);

  const panels = [];

  for(let i = 0; i < panelNr; i++){
    panels.push(<Panel 
                  key={i} 
                  taskDrag={taskDrag}
                  setTaskDrag={setTaskDrag}
                ></Panel>)
  }

  return (
    <div className="App">
      <h1>Kanban</h1>
      <div className='container'>
        { panels }
        <button 
          className='btn-newPanel' 
          type='button' 
          onClick={() => setPanelNr(panelNr+1)}
          title='Add new'
        >+</button>
      </div>
    </div>
  );
}

export default App;
