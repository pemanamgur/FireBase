// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1lUUGCdz8qMSr8vy1fhpDUe_rWHH4Iv8",
  authDomain: "notify360s.firebaseapp.com",
  projectId: "notify360s",
  storageBucket: "notify360s.appspot.com",
  messagingSenderId: "58744650975",
  appId: "1:58744650975:web:05d32ce7b261b244bf3d6a",
  measurementId: "G-5DTV9R100E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth}