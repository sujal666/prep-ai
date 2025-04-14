// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAM1ZdoAu1hdInVmY016V0W84R5FXwyIXw",
  authDomain: "prepai-d399a.firebaseapp.com",
  projectId: "prepai-d399a",
  storageBucket: "prepai-d399a.firebasestorage.app",
  messagingSenderId: "711716695233",
  appId: "1:711716695233:web:e6f76835c4b5c8f2b43840",
  measurementId: "G-XJL735R2W3"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)