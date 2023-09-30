// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz2wsysBJha-h80_eZ03PiNcIdzZicO3c",
  authDomain: "user-email-password-auth-a3fb2.firebaseapp.com",
  projectId: "user-email-password-auth-a3fb2",
  storageBucket: "user-email-password-auth-a3fb2.appspot.com",
  messagingSenderId: "965364631107",
  appId: "1:965364631107:web:135c15f16be9bbf36176f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;