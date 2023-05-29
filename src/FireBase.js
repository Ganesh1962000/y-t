// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcaZdxAu1CmJ0OsBHugqFCT_aDbIA2CCA",
  authDomain: "yt-clone-bf446.firebaseapp.com",
  projectId: "yt-clone-bf446",
  storageBucket: "yt-clone-bf446.appspot.com",
  messagingSenderId: "540052831421",
  appId: "1:540052831421:web:ab39ae99e1ba66a86d0bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timeStamp = serverTimestamp();

export {app,db,auth,timeStamp,provider};