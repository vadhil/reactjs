export const List = () => {
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