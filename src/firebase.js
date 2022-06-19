// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAkm2g0A03IPhsaCuRikSocQXy4FqOiAY",
  authDomain: "rickandmorty-5b416.firebaseapp.com",
  projectId: "rickandmorty-5b416",
  storageBucket: "rickandmorty-5b416.appspot.com",
  messagingSenderId: "899971657883",
  appId: "1:899971657883:web:43fe11cd37ab3042ce163e",
  measurementId: "G-45CG4P94QF"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);