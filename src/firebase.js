// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUNKAQXdKv8v1ACyl8sGnK-WnVjGHVqTI",
  authDomain: "bizweb-4a318.firebaseapp.com",
  projectId: "bizweb-4a318",
  storageBucket: "bizweb-4a318.firebasestorage.app",
  messagingSenderId: "293938674735",
  appId: "1:293938674735:web:a3e959c1cb09e960c45ada",
  measurementId: "G-264E24WWTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);