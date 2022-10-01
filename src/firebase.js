// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMfPCvUVNNu25jFSFkx6tp0eQX0dsvQuA",
  authDomain: "restaurant-app-milo.firebaseapp.com",
  projectId: "restaurant-app-milo",
  storageBucket: "restaurant-app-milo.appspot.com",
  messagingSenderId: "41139291077",
  appId: "1:41139291077:web:32ff5094df97758ea681ac",
  measurementId: "G-K8Z39HM2NY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);