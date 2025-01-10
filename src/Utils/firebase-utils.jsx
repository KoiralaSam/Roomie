import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  setDoc,
  getDoc,
  getFirestore,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
      console.log((await getDoc(doc(db, "users", userAuth.uid))).data());
    } catch (error) {
      console.log(error.code);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListner = async (callback) => {
  if (!callback) return;
  return onAuthStateChanged(auth, callback);
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getPostAndDocuments = async () => {
  const collectionRef = collection(db, "posts");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const postMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, content } = docSnapshot.data();
    acc[title.toLowerCase()] = content;
    return acc;
  }, {});
  return postMap;
};
