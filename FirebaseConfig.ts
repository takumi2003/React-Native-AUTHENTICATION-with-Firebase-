// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcnioKwYXjCx-_Yycr5b50awkcdrKNEMo",
  authDomain: "test-59820.firebaseapp.com",
  projectId: "test-59820",
  storageBucket: "test-59820.appspot.com",
  messagingSenderId: "361890814548",
  appId: "1:361890814548:web:24fd38f0265ed052956bc1",
  measurementId: "G-PM7NW1GPF5"
};

// Initialize Firebase
export const FIREBASE_APP  = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
