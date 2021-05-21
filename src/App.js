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
export default App;
