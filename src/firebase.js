import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDxpEZ_3yueMouOzDPjmZPAG-dkQgLr1Q",
  authDomain: "todo-app-cp-e14d4.firebaseapp.com",
  databaseURL: "https://todo-app-cp-e14d4-default-rtdb.firebaseio.com",
  projectId: "todo-app-cp-e14d4",
  storageBucket: "todo-app-cp-e14d4.appspot.com",
  messagingSenderId: "111844269754",
  appId: "1:111844269754:web:f8bc6e009bc68ac359ec83",
  measurementId: "G-GF4JJPW982"

});

const db = firebaseApp.firestore();

export default db;
