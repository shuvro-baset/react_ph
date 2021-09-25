
import './App.css';
import Header from './Components/Header/Header';
// import Countries from './Components/Countries/Countries';
import Meal from './Components/Meals/Meals';
// import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* calling Countries component */}
      {/* <Countries></Countries> */}
      <Header></Header>
      <Meal></Meal>
    </div>
  );
}
export default App;


