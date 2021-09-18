
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ListComponent></ListComponent>
      <Counter></Counter>
      <Product></Product>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
// first component that contains a list.
function ListComponent(){
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];
  const listStyleClass = {
    margin: "30px 100px",
  };
  return (
    <div style={listStyleClass}>
      <h4>Here I am showing a list from an array.</h4>
      <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
      </ul>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

// counter component using useState method. 
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    // inline css added here.
    <div style={{textAlign: 'center', backgroundColor: "black", color: "white", width: "50%", marginLeft: "25%"}}>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}


export default App;


