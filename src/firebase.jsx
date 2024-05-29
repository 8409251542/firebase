// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAhjXCyihmlg1Dhc7AVbJf_kmWmIVC3O70",
  authDomain: "my-first-a7db7.firebaseapp.com",
  projectId: "my-first-a7db7",
  storageBucket: "my-first-a7db7.appspot.com",
  messagingSenderId: "570976357406",
  appId: "1:570976357406:web:53e1518c6ac2f7a1d5720f",
  measurementId: "G-213XZWR0P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();
export {app,auth}