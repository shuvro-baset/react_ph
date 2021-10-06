
import './App.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from './firebase/firebase.initialize';
const provider = new GoogleAuthProvider();
initializeAuthentication()
function App() {

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }
  return (
    <div className="App">
      <button onClick={handleSignIn}>google-sign-in</button>
    </div>
  );
}

export default App;
