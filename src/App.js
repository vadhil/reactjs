import './App.css';
import { useState } from 'react';
import { Task } from './Task';
function App() {
      let [todoList, setTodoList] = useState([]);
      let [newTask, setNewTask] = useState("");
      let [isDone, setDone] = useState(false);

  const handleChange = (event) => {
      setNewTask(event.target.value)
  }
  const addTask =()=> {
    let id = 1
    const task = {
      id: id++,
      // id: todoList.length === 0? 1 :todoList[todoList.length - 1] + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task]);
    // setNewTask("") ; //keasalahan gw disini karena tidak spesifik menjadikan sbg array
  }
    const deleteTask =(task)=> {
      setTodoList( todoList.filter(todo => todo !==  task) )
    }
    const doneTask =()=>{
      setDone(!isDone)
    }
    const completeTask = (task)=> {
      // todoList.completed: true;
      setTodoList(
        todoList.map((todo)=> {
         if (todo !== task ) {
          return {...todo, completed: true}
         } else {
          return todo;
         }

    })
      )
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
<Task
completeTask={completeTask}
  setDone={setDone}
  task={task}
  isDone={isDone}
  setTodoList={setTodoList}
  deleteTask={deleteTask}
  todoList={todoList}
  completed={todoList.completed}
/>
                )
            })}
          
        </div>
      
      </div>
      
      );
    }




export default App;

 