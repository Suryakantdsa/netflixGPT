// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT4guoynrA8BnY1ow1g0qytAjYoZDs-bA",
  authDomain: "netfilxgpt-bb0b3.firebaseapp.com",
  projectId: "netfilxgpt-bb0b3",
  storageBucket: "netfilxgpt-bb0b3.appspot.com",
  messagingSenderId: "416888069414",
  appId: "1:416888069414:web:d3d2c2b1f8f9a074df35e7",
  measurementId: "G-0XE71BFCZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth()