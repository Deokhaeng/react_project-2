// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3AanOfdSizYRAEeYsz5aommF4nw4JpAk",
  authDomain: "react-project-2-e0bde.firebaseapp.com",
  projectId: "react-project-2-e0bde",
  storageBucket: "react-project-2-e0bde.appspot.com",
  messagingSenderId: "580097416474",
  appId: "1:580097416474:web:4f1b94be03e109ddfa60a3",
  measurementId: "G-QCCTZXKXG3",
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
