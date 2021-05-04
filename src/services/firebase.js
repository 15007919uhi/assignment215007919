import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyA5wcTkLXhQEg4eS92n2PmlU9TD_9kuOQ0",
    authDomain: "assignment215007919.firebaseapp.com",
    databaseURL: "https://assignment215007919-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "assignment215007919",
    storageBucket: "assignment215007919.appspot.com",
    messagingSenderId: "320392716114",
    appId: "1:320392716114:web:48fd902bbdba17586d648b",
    measurementId: "G-KM92LSC6GT"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = firebase.firestore();
export const db = firebase.database();