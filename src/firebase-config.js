// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSrO9V4_ww2svHwhHvsLUdffCl9pjQ65g",
  authDomain: "blog-4ab75.firebaseapp.com",
  projectId: "blog-4ab75",
  storageBucket: "blog-4ab75.appspot.com",
  messagingSenderId: "521839053133",
  appId: "1:521839053133:web:bb6462cbca164648398f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
