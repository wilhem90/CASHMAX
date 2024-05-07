import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDovhE50Mzo6TeVAxTayFDSuHP5dnMtlgs",
    authDomain: "cashmax-v1.firebaseapp.com",
    projectId: "cashmax-v1",
    storageBucket: "cashmax-v1.appspot.com",
    messagingSenderId: "381446748900",
    appId: "1:381446748900:web:f4481d87c4e7c7de300af1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);