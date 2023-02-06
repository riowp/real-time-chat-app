import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyABXMHCRltn9DV0YFZJQBkFBmfTlbaeuZ8",
  authDomain: "chat-app-riowahyu.firebaseapp.com",
  projectId: "chat-app-riowahyu",
  storageBucket: "chat-app-riowahyu.appspot.com",
  messagingSenderId: "77688094008",
  appId: "1:77688094008:web:dbefaf1de70acdf09f55cd",
  measurementId: "G-XXY517VJQY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

