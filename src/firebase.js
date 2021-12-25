import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsnlIe98l6556kC2xlnb4f5I6K2Xkx4lc",
  authDomain: "react-login-21799.firebaseapp.com",
  projectId: "react-login-21799",
  storageBucket: "react-login-21799.appspot.com",
  messagingSenderId: "21930527995",
  appId: "1:21930527995:web:c41f9a9c526908476a345e",
  measurementId: "G-CPR4RG0PWG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);