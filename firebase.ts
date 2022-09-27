// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyaYMtL187At3YFJkHLi7vxguZyhhjyC4",
  authDomain: "company-3f2ef.firebaseapp.com",
  projectId: "company-3f2ef",
  storageBucket: "company-3f2ef.appspot.com",
  messagingSenderId: "86034080050",
  appId: "1:86034080050:web:257b61fc556244ae57b72b",
  measurementId: "G-107B1ZCHGE"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);