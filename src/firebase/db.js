import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASNBnvjc6tqgM7N349rQH31O79J0CnfTA",
  authDomain: "form-challenge-24df2.firebaseapp.com",
  projectId: "form-challenge-24df2",
  storageBucket: "form-challenge-24df2.appspot.com",
  messagingSenderId: "1017941620502",
  appId: "1:1017941620502:web:ed79f2013f9555548b4237",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
