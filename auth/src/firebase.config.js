// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpej867Qr4cL_slya4rKZApLXip6tMsdk",
  authDomain: "project-phone-otp.firebaseapp.com",
  projectId: "project-phone-otp",
  storageBucket: "project-phone-otp.appspot.com",
  messagingSenderId: "853477098007",
  appId: "1:853477098007:web:278678cac8919160a59252",
  measurementId: "G-PF5YM4ET7V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth,firebase }