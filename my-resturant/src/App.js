
import './App.css';
import Header from './Components/Header/Header';
import Restaurant from './Components/Resturaurant/Restaurant';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>
      <Switch>
        <Route path="/home">
          <Restaurant></Restaurant>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
