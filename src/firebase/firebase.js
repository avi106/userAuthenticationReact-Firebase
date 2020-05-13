import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8EG7Dk2TFqa073IDCpw1hG_GGaq6BdeQ",
  authDomain: "userauthenticationwithfirebase.firebaseapp.com",
  databaseURL: "https://userauthenticationwithfirebase.firebaseio.com",
  projectId: "userauthenticationwithfirebase",
  storageBucket: "userauthenticationwithfirebase.appspot.com",
  messagingSenderId: "234527383990",
  appId: "1:234527383990:web:b999d9dc7bcb59d6a9e117",
  measurementId: "G-PLJ2SS0ERY",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
