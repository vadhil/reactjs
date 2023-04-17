import './App.css';
import { useState } from 'react';
// import {Books} from './User';
// import styles from './App.module.css';

// let toggle = true;
// const coretList = (toggle) =>{
//   return !toggle;
// }
    // <li className={toggle? "stratched": "name"}>{i + ". "}{todo}</li>

//     const strikeList = (stratched) => {
//       const newTodos = todos.filter(todo => todo == stratched)
//       setTodos(newTodos);
// }

function App() {
let [todos, setTodos] = useState(['ngoding', 'mengaji', 'belajar']);

const deleteList = (deleted) => {
      const newTodos = todos.filter(todo => todo !== deleted)
      setTodos(newTodos);
}
// tidak perlu mencari, cukup toggle 
//hasilnya akan array
// const newTodos = todos.filter(todo => todo == strike) ini arr yg dicoret
//bagaimana cara memasukkan stylenya? mungkin harus pakai props
const strikeList = (strike) =>{
  const newTodos = todos.filter(todo => todo === strike)
  setTodos(newTodos);
}

const List = () => {
  const handleDoneClick = (todo) => {
    deleteList(todo);
  }
const handleStrikeClick = (todo) => {
  strikeList(todo);
    // setTodos(
    //   <li className="stratched">{i + ". "}{todo}</li>
    // );
    }
  return (
      <div>
        <ul>
        {todos.map((todo, i) => { i++;
          console.log(todo, i);
          return <li>{i + ". "}{todo}
          <button onClick={() => {handleDoneClick(todo)}}> Done </button>
          <button onClick={() => {handleStrikeClick(todo)}}> Stratch </button>

          </li>
        })}
          {/* <button onClick={deleteList}> Done </button> */}
        </ul>
          {/* <input> add to do list </input> */}
      </div>
  );
}
let [input, setInput] = useState("");

const takeValue = (event) =>{
    setInput(event.target.value);
  }
//       return <div>
//         <h1>{input}</h1>
//       <input onChange={takeValue}>
//       </input>
//       </div>
// }

  return (
    <div className="App ">
        <h1>to do list</h1>
        <div className='addTask'>
        {/* <Input/> */}
        <h1>{input}</h1>
        <input onChange={takeValue}/>
        <button>add task</button>
        </div>

        <List/>
    </div>

  );
} 



export default App;
