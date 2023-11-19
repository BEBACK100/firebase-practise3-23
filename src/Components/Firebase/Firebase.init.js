// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJLidiwEO6OUMjWhcIGIMCRAgVd8J_Od8",
  authDomain: "fir-prac-3.firebaseapp.com",
  projectId: "fir-prac-3",
  storageBucket: "fir-prac-3.appspot.com",
  messagingSenderId: "57645574168",
  appId: "1:57645574168:web:c69a06cd0c344ec3e7bb6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app