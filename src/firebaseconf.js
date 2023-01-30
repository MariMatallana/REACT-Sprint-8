import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDAQO6RqM5qoStqulHoIMCUgibYYp7dbhQ",
  authDomain: "fir-auth-starwars.firebaseapp.com",
  projectId: "fir-auth-starwars",
  storageBucket: "process.env.REACT_APP_FIREBASE_STORAGEBUCKET",
  messagingSenderId: "fir-auth-starwars.appspot.com",
  appId: "1:227581903710:web:b26d34ca988ec8c234c5cf",
  measurementId: "G-Z4XCFK1ELY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

