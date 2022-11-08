export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdA5oBRGPfuxglY0_gtRN9hyFrJR_7DBE",
  authDomain: "hello-world-app-bc466.firebaseapp.com",
  databaseURL: "https://hello-world-app-bc466-default-rtdb.firebaseio.com",
  projectId: "hello-world-app-bc466",
  storageBucket: "hello-world-app-bc466.appspot.com",
  messagingSenderId: "896772105337",
  appId: "1:896772105337:web:db53de52139b8c5f4ce0a8",
  measurementId: "G-KRL36FEYH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);