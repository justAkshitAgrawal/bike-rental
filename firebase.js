// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiWIvYBEHo2co1wOHzvoKx29a0MExaq8Q",
  authDomain: "bike-rental-d4373.firebaseapp.com",
  projectId: "bike-rental-d4373",
  storageBucket: "bike-rental-d4373.appspot.com",
  messagingSenderId: "617649336797",
  appId: "1:617649336797:web:537e3c75c7b539481c0634",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

export { auth };
