// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq9OXDBRH9W3ZvSc-IErEXLNF02Gv29k4",
  authDomain: "weatherapp-4acf3.firebaseapp.com",
  projectId: "weatherapp-4acf3",
  storageBucket: "weatherapp-4acf3.appspot.com",
  messagingSenderId: "74008603349",
  appId: "1:74008603349:web:a001c246f3bfdcca8d505c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app