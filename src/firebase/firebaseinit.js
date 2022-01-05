import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBq9OXDBRH9W3ZvSc-IErEXLNF02Gv29k4",
  authDomain: "weatherapp-4acf3.firebaseapp.com",
  projectId: "weatherapp-4acf3",
  storageBucket: "weatherapp-4acf3.appspot.com",
  messagingSenderId: "74008603349",
  appId: "1:74008603349:web:a001c246f3bfdcca8d505c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
