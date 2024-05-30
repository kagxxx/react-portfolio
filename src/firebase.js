
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkd9JaatlY99O6gfiaONZZU2wXdzc61uk",
    authDomain: "react-portfolio-4025b.firebaseapp.com",
    projectId: "react-portfolio-4025b",
    storageBucket: "react-portfolio-4025b.appspot.com",
    messagingSenderId: "43034923639",
    appId: "1:43034923639:web:954cde567e5d5c6ce52c72"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);