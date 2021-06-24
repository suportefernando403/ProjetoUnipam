import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyDDWb7bzL80fKCRXLXeFHiUEwQmdMUVjW8",
    authDomain: "projetounipam-b4590.firebaseapp.com",
    databaseURL: "https://projetounipam-b4590-default-rtdb.firebaseio.com",
    projectId: "projetounipam-b4590",
    storageBucket: "projetounipam-b4590.appspot.com",
    messagingSenderId: "1084852237698",
    appId: "1:1084852237698:web:53f0dd981edb0da6488b9b",
    measurementId: "G-RBHJX1NTFQ"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
















