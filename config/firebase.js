// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestor } from "firebase/firestore";
import { Constants } from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.storageBucket,
  messagingSenderId: Constants.manifest.messagingSenderId,
  appId: Constants.manifest.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databaseFirestore = getFirestore();
const auth = getAuth();