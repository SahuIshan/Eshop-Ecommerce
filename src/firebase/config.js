
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-a17e1.firebaseapp.com",
  projectId: "eshop-a17e1",
  storageBucket: "eshop-a17e1.appspot.com",
  messagingSenderId: "701087445679",
  appId: "1:701087445679:web:409ef6f4cfd2d6cd2e9a5a",
  measurementId: "G-4H2LDXK53K"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const db =  getFirestore(app);
export const storage = getStorage (app);
export default app