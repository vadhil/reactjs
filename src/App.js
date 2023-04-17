import './App.css';
import { useState } from 'react';

function App() {
      let [todos, setTodos] = useState(['ngoding', 'mengaji', 'belajar']);
      let [input, setInput] = useState("");
      let [isDone, setDone] = useState(false);


      const List = () => {
        return (
            <div>
              <ul>
              {todos.map((todo, i) => { i++;
                console.log(todo, i);
               return <li className= {isDone?"stratched": "green"}>{i + ". "}{todo}
                <button onClick={() => setDone(!isDone)}> Done</button>
                <button onClick={() => setTodos( todos.filter(todol => todol !== todo) )}> delete </button>
                </li>
              })}
              </ul>
            </div>
        );
        } 


  const addTodos = () => {
    const newTodos = [...todos, input]
      setTodos(newTodos);
      setInput("");
   }

 

 

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="App">
    <h1>To Do List</h1>
    <div className="addTask">
      <button onClick={() => setTodos([...todos, input])}>Add</button>
      <input type="text" onChange={handleInput} />
    </div>
    <List/>
  </div>
  
  );
} 



export default App;


// value={input} 