
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ListComponent></ListComponent>
      <Counter></Counter>
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

// counter component using useState method. 
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    // inline css added here.
    <div style={{textAlign: 'center', backgroundColor: "black", color: "white", width: "50%", marginLeft: "25%", padding: "5px"}}>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

// External User component that comes from an API service. Here I am showing username and Email.
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3 style={{textAlign: 'center', backgroundColor: "black", color: "white", width: "50%", margin: "20px 25%", padding: "5px"}}>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>) //dynamic user data passing here.
      }
    </div>
  )
}
// user component that will use in ExternalUsers component.
function User(props) {
  return (
    // this className style property comes from app.css file. It means Its a external css effect.
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;


