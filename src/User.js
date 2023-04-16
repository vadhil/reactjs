export const Books = (props) => {
    return (
      <div className='name'>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
      </div>
    );
  }