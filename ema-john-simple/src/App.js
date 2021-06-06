import logo from './logo.svg';
import './App.css';
// import header file from component folder
import Header from './components/Header/Header'
// import shop file from shop folder 
import Shop from './components/Shop/Shop'

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
} 

export default App;
