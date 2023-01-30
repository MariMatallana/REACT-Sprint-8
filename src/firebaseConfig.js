// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFJQ2HS6ihghZaWSbqHelBLePqLebwIiU",
  authDomain: "starwars-auth-416e3.firebaseapp.com",
  projectId: "starwars-auth-416e3",
  storageBucket: "starwars-auth-416e3.appspot.com",
  messagingSenderId: "583171777149",
  appId: "1:583171777149:web:cccc18a3d83c9ae9b78714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app