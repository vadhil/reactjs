import './App.css';
import { useState } from 'react';
import {Books} from './User';
// import styles from './App.module.css';

function App() {
  const name = "fadhil";
  const age = 2;
  const isGreen = false;
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
  ];
  const fruits = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "kiwi", color: "green" }]
    const planets = [
      { name: "Mercury", isGasPlanet: false },
      { name: "Saturn", isGasPlanet: true },
      { name: "Venus", isGasPlanet: false },
      { name: "Earth", isGasPlanet: false },
      { name: "Jupiter", isGasPlanet: true },
      { name: "Uranus", isGasPlanet: true },
      { name: "Mars", isGasPlanet: false },
      { name: "Neptune", isGasPlanet: true },
    ];
  const Planets = (props) => {
    {return <div style={{color:  props.cond ? "red": "green"}}>
              <h1>"{props.name} are {props.cond? "poison, we cant live there": "safe"} </h1>
    </div>
    }
  }  

  let [value, setValue] = useState(0);
  const increaseValue = () => {
    value ++;
    setValue(value)
  }
  let [input, setInput] = useState("");
  const changeInput = (event) => {
    setInput(event.target.value);
  }
  const showing = "showing you my secret";
  
  let [show, setShow] = useState(false);
  // const trigger = () => {
  //   setShow(!show);
  // }
  let [red, setRed] = useState(true);

  let [num, setNum] = useState(0);
  const increaseNum = () => {
    num ++;
    setNum(num)
  }
  return (
    <div className="App ">

        <h1> {num}</h1>
        <button onClick={increaseNum}>increase</button>
        <button onClick={()=> setNum(num -= 1)}>decrease</button>
        <button onClick={()=> setNum(num*0)}>make it zero</button>

        <h1 className={red && "name"}> "power of ReactJS"</h1>
        <button onClick={()=> setRed(!red)}>RED!</button>
        <h1 >{show && showing}</h1>
        <button onClick={() => setShow(!show)}>show/hide</button>
        <input type="text" onChange={changeInput}></input>
        <h1> {input} </h1>
        <h1 className='name'>{value}</h1>
        <button onClick={increaseValue}>increase</button>
        {planets.map((planet) => {
          return <Planets name={planet.name} cond={planet.isGasPlanet}/>
        })}
       {books.map((book, i) => {
        return < Books title = {book.title} author = {book.author}      
         />
       })}

      {fruits.map((fruit, i )=> { i++
          return <div>
            <h1>{i + ". "}{fruit.name}</h1>
            <h3>{fruit.color}</h3>
          </div>
      })}
      <h1 style={{backgroundColor: isGreen ? "green" : "red" }}> testing </h1>   
      <User name="fadhil" age={25} email={"fadhil.alra@gmail.com"}/>
      {age >= 18 ? <h1>u should get a job</h1>:<h1>u should study more</h1> }  
      <Job salary={20+ "k"} company="Google" position="manager" />
    </div>
  );
} 


const User = (props) => {
  return (
    <div>
      <h1> {props.name}</h1>
      <h3> {props.age} </h3>
      <h3> {props.email}</h3>
    </div>
  );
}
const Job = (props) => {
  return (
    <div>
      <h1> {props.salary}</h1>
      <h3> {props.position} </h3>
      <h3> {props.company}</h3>
    </div>
  );
}

export default App;
