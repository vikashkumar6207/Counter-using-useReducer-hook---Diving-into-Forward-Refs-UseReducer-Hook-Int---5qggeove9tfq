import React, {useReducer} from 'react'

import '../styles/App.css';
const App = () => {
  const Initialstate = {count: 0};
  const reducer = (taskState, action)=>{
    switch (action.type){
      case "add":
      return {count: taskState.count + 1};
      case "delete":
        return {count: taskState.count - 1};
      case "deleteAll":
        return {count: 0};
      default:
        return taskState;
    }
  }
    const [taskState, dispatch] = useReducer(reducer, Initialstate);
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>
    </div>
  )
}

 
export default App;
