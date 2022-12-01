// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeZLfQE18QG9-4pUoe19UmF0033QHn-Og",
  authDomain: "fir-auth-server-90312.firebaseapp.com",
  databaseURL: "https://fir-auth-server-90312-default-rtdb.firebaseio.com",
  projectId: "fir-auth-server-90312",
  storageBucket: "fir-auth-server-90312.appspot.com",
  messagingSenderId: "62060428731",
  appId: "1:62060428731:web:b7d86bec604cc81bc9189e",
  measurementId: "G-7BCKD0DMVY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
// const analytics = getAnalytics(app);

