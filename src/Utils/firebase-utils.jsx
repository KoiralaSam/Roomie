import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACZHkwTyV7wcZ-a4D8tiqGgUZIxFfSsto",
  authDomain: "roomie-c9802.firebaseapp.com",
  projectId: "roomie-c9802",
  storageBucket: "roomie-c9802.firebasestorage.app",
  messagingSenderId: "573557553649",
  appId: "1:573557553649:web:e036b148e92c9c3cca2c50",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signOutAuth = () => {
  signOut(auth);
};

export const signInAuthWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListner = async (callback) => {
  if (!callback) return;
  return onAuthStateChanged(auth, callback);
};
