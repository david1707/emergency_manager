import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// Init Firebase
initializeApp(firebaseConfig);

// Init Firebase auth
const auth = getAuth();

// Initi Firestore
const db = getFirestore()

export { auth, db };
