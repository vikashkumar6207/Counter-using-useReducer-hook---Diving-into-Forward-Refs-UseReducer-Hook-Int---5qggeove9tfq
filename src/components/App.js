import React, {useReducer} from 'react'

import '../styles/App.css';
const App = () => {
  const Initialstate = 0;
  function reducer(count, taskState){
    switch (taskState.type){
      case "add":
      return count + 1;
      console.log(count);

      case "delete":
        return  count - 1;
        console.log(count);

      case "deleteAll":
        return 0;
    }
  }
    const [taskState, dispatch] = useReducer(reducer, Initialstate);
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState}</h3>
    </div>
  )
}

 
export default App;
