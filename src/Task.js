// export const Task = (props) => {
//     return (
// <div>
// <h1 className= {props.isDone? 'done':''}>{task.taskName}</h1>
// <button onClick={() => setTodoList( todoList.filter(todo => todo !== props.task) )}> X </button>
// <button onClick={() => setTodoList( todoList.filter(todo => todo === props.task) )}> keep </button>
// <button onClick={() => props.doneTask}> Done </button>           
// {/* <button onClick={() => deleteTask(task.id)}> delete </button> */}
// </div>
// );
// }
export const  Task= (props)=> {
  const { task, isDone, completeTask ,setTodoList, deleteTask, todoList, setDone } = props;

  return (
    <div>
      <h1 className={task.completed ? 'done' : ''}>{task.taskName}</h1>
      <button onClick={() => setTodoList(todoList.filter(todo => todo!== task))}>X</button>
      <button onClick={() => setTodoList(todoList.filter(todo => todo === task))}>keep</button>
      <button onClick={() => setDone(!isDone)}>Done</button>
      <button onClick={() => completeTask}>complete</button>
      {/* <button onClick={() => deleteTask(task)}>delete</button> */}
    </div>
  );
}