// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBHoYkqQirU_w-gXZmyB-aFAAZFT8fVCaE",
  authDomain: "mychat-76829.firebaseapp.com",
  projectId: "mychat-76829",
  storageBucket: "mychat-76829.appspot.com",
  messagingSenderId: "182081386571",
  appId: "1:182081386571:web:f9500028f9c1292ec3f5ce",
  measurementId: "G-4Y6E6YMXTX"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()



