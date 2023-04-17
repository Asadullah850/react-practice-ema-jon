// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe8iSUvRC54GVrciKdnTK-oFyH7xGLInk",
  authDomain: "auth-firebase-contextapp.firebaseapp.com",
  projectId: "auth-firebase-contextapp",
  storageBucket: "auth-firebase-contextapp.appspot.com",
  messagingSenderId: "745780821382",
  appId: "1:745780821382:web:95af657c6a8f8849f44007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;