// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL-y_TyWGM6pAmTLNOF_gFvKk8Aiyjz0U",
  authDomain: "clone-7f3a2.firebaseapp.com",
  projectId: "clone-7f3a2",
  storageBucket: "clone-7f3a2.appspot.com",
  messagingSenderId: "515497761573",
  appId: "1:515497761573:web:28172a66d55ae9efc9d8cc",
  measurementId: "G-ZP1BLFZKSM",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=app.firestore();
export {auth,db};