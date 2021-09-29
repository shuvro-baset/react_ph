import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route path="/home">
            <Home></Home>
            <Friends></Friends>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
