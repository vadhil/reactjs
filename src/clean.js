import React, { useState } from "react";

function App() {
  let [input, setInput] = useState("");
  let [lists, setLists] = useState(["fadhil"]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const addLists = () => {
    let newLists = [...lists, input];
    setLists(newLists);
    setInput("");
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="addTask">
        <button onClick={addLists}>Add</button>
        <input type="text" value={input} onChange={handleInput} />
      </div>
      <div>
        <ul>
          {lists.map((list, i) => {
            return (
              <li key={i}>
                {i + 1}. {list}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
