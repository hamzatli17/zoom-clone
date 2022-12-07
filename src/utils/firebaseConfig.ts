import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyD5rmYLvtXBv51a6BDnF9_1CTY_EXQKKRU",

  authDomain: "meet-e5097.firebaseapp.com",

  projectId: "meet-e5097",

  storageBucket: "meet-e5097.appspot.com",

  messagingSenderId: "742145134159",

  appId: "1:742145134159:web:29d40f174f6d6e5062643a",

  measurementId: "G-4828Q32Q6F"

};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
