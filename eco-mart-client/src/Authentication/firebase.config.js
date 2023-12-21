// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Kb-jC0vW5A-vpOQ_c_J6aCZIHi7ClCE",
  authDomain: "eco-mart-8bbc0.firebaseapp.com",
  projectId: "eco-mart-8bbc0",
  storageBucket: "eco-mart-8bbc0.appspot.com",
  messagingSenderId: "798384289115",
  appId: "1:798384289115:web:319b80c976022c1005167e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth