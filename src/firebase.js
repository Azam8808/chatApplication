
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBpESE27yKZ8RWoGqqla3B_oBOiiH2cp4Y",
  authDomain: "chatapplication-bf890.firebaseapp.com",
  projectId: "chatapplication-bf890",
  storageBucket: "chatapplication-bf890.appspot.com",
  messagingSenderId: "91324793003",
  appId: "1:91324793003:web:d820161a54d233a71637ee"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();