// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWu9ev2IPWFkqDIcP04SEzuq93Qy3drKA",
  authDomain: "genius-car-services-2fa38.firebaseapp.com",
  projectId: "genius-car-services-2fa38",
  storageBucket: "genius-car-services-2fa38.appspot.com",
  messagingSenderId: "1088845737136",
  appId: "1:1088845737136:web:f60aec0a956af36de69f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;