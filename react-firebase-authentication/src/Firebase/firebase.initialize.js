// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase config from another file.
import firebaseConfig from "./firebase.config";

const initializeAuthentication = ()=> {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;