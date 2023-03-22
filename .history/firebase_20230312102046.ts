import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbp59mch0FDen341jfXXE4tis4sVgZGHI",
  authDomain: "chatgpt-messenger-yt-7ac0d.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-7ac0d",
  storageBucket: "chatgpt-messenger-yt-7ac0d.appspot.com",
  messagingSenderId: "844529446792",
  appId: "1:844529446792:web:3f3e0abf8c0646de37943d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);