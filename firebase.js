import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD44ZH1oWZ7loJl08l6Uc4ULI71NLJl3Xs",
  authDomain: "superchat-7f8cf.firebaseapp.com",
  projectId: "superchat-7f8cf",
  storageBucket: "superchat-7f8cf.appspot.com",
  messagingSenderId: "682183974118",
  appId: "1:682183974118:web:4bae316708d654eae62f27"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, { experimentalForceLongPolling: true, });
export function sIgnIn(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}