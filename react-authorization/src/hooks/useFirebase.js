import { useState } from "react"
import initializeAuthentication from './../Firebase/firebase.initialize'
// importing google authentication functionality 
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    // user state for authentication.
    const [user, setUser] = useState({})
    // error handling for authentication
    const [error, setError] = useState('');
    // calling auth functions
    const auth = getAuth()
    // calling providers for google and github accounts
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google sign in functionality
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return {
        user,
        error,
        signInUsingGoogle,
        // signInUsingGithub,
        // logout
    }
}

export default useFirebase;