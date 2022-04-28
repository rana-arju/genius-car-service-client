// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo2Kfkbl0UpVqk7whLMLTSVNGQSLX3N2c",
  authDomain: "coxpoly-students-forum.firebaseapp.com",
  projectId: "coxpoly-students-forum",
  storageBucket: "coxpoly-students-forum.appspot.com",
  messagingSenderId: "723716902545",
  appId: "1:723716902545:web:4ae65a093d2b5b893ff930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
