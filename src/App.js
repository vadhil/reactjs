import './App.css';
import { useState } from 'react';

function App() {
      let [todos, setTodos] = useState(['ngoding', 'mengaji', 'belajar']);
      let [input, setInput] = useState("");
      let [lists, setLists] = useState(['fadhil'])

      const List = () => {
        return (
            <div>
              <ul>
              {todos.map((todo, i) => { i++;
                console.log(todo, i);
                return <li>{i + ". "}{todo}
                {/* <button onClick={() => {handleStrikeClick(todo)}}> Stratch </button> */}
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
  const addLists = () => {
    let newLists = [...lists, input]
    setLists(newLists);
    setInput("");
  }
  return (
    <div className="App">
    <h1>To Do List</h1>
    <div className="addTask">
      <button onClick={addLists}>Add</button>
      <button onClick={addTodos}>Add</button>
      <input type="text" value={input} onChange={handleInput} />
    </div>
    <div>
      <ul>
        {lists.map((list, i) => {
          return <li key={i}>{list}</li>
        })}
      </ul>
    </div>
    <List/>
  </div>
  
  );
} 



export default App;


 {/* <input /> */}
        {/* <input></input> */}
        {/* <button onClick={() => {setInput(takeValue())}}>add task</button> */}