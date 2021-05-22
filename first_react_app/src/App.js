import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>this is my first react practice app</p>
        {/* calling the component */}
         <Person></Person>
         <Person></Person>
         {/* dynamic component */}
         <DynamicPersonComponent name="Shuvro" job="Web Developer"></DynamicPersonComponent>
         <DynamicPersonComponent name="Baset" job="React Developer"></DynamicPersonComponent>

        {/* state changer  */}
        <Counter></Counter>

        {/* load user data */}
        <Users></Users>

      </header>
    </div>
  );
}

// creating a component function
function Person(){
  const personStyle={
    border: '1px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: sakib al hasan</h1>
      <h3>favourite bd player</h3> 
    </div>
  )
}
// creating component dynamic way and passing it to component, in that case we have to pass props as parameters
function DynamicPersonComponent(props) {
  return (
    <div style={{border: '1px solid yellow',margin: '10px',width: '400px'}}>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.job}</p>
    </div>
  )
}

// dynamic state changer
function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // making easier function to increment and decrement
  // const handleIncrease = () => setCount(count+1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>decrease</button>

    </div>
  )
}

// data loading component
function Users(){
  // declare state. 
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li >)
        }
      </ul>
    </div>
  )
}
export default App;
