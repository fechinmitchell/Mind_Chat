import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db= getFirestore(app);

export {db}