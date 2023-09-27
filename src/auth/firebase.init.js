// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc1W4pPt2p334cBv7-TM0fT4nevArC9zk",
    authDomain: "day-1-49d99.firebaseapp.com",
    projectId: "day-1-49d99",
    storageBucket: "day-1-49d99.appspot.com",
    messagingSenderId: "546964758863",
    appId: "1:546964758863:web:0a8e9553d8b41384caa53a",
    measurementId: "G-P56QKS620W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);