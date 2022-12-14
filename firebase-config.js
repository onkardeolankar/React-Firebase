import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBrOzXGWzNqJINfBT-eMnT4fyPc7Hx96wI",
    authDomain: "react-firebase-1ca8f.firebaseapp.com",
    projectId: "react-firebase-1ca8f",
    storageBucket: "react-firebase-1ca8f.appspot.com",
    messagingSenderId: "920996642671",
    appId: "1:920996642671:web:25e0a7de63f489e875329a",
    measurementId: "G-2NY1ELB5WY"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);