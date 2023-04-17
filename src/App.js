import './App.css';
import { useState } from 'react';
function App() {
      let [todoList, setTodoList] = useState([]);
      let [newTask, setNewTask] = useState("");
      let [isDone, setDone] = useState(false);

  const handleChange = (event) => {
      setNewTask(event.target.value)
  }
  const addTask =()=> {
    const task = {
      id: todoList.length === 0? 1 :todoList[todoList.length - 1] + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]); //keasalahan gw disini karena tidak spesifik menjadikan sbg array
  }
  return (
    <div className="App">
    <div className="addTask">
      <h1>To Do List</h1>
      <button onClick={addTask}>Add task</button>
      <input type="text" onChange={handleChange} />
    </div>
    <div className='list'>
      
       { todoList.map((task) => {
            return(
            <div>
            <h1>{task.taskName}</h1>
            <button > </button>
            </div>
            )
        })}
      
    </div>
  
  </div>
  
  );
} 



export default App;

  {/* <div>
              <ul>
              {todos.map((todo) => { 
                
               return <li className= {todo.isDone?"stratched": "green"}>{todo.id + ". "}{todo.text}
                <button onClick={() => setDone(!isDone)}> Done</button>
                <button onClick={() => setTodos( todos.filter(todol => todol.id !== todo.id) )}> delete </button>
                </li>
              })}
              </ul>
            </div> */}



  // const addTodos = () => {
  //   const newTodos = {
  //     id: todos.length === 0? 1 :todos[todos.length - 1] + 1,
  //     text: input
  //   }
  //     setTodos(newTodos);
  //     setInput("");
  //  }

  // const handleInput = (event) => {
  //   setInput(event.target.value)
  // }


// value={input} 