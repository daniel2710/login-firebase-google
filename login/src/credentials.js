import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAEyUYk0YVCWJPalPygwRtWmLxSs8OBwtQ",
  authDomain: "login-c528a.firebaseapp.com",
  projectId: "login-c528a",
  storageBucket: "login-c528a.appspot.com",
  messagingSenderId: "887808408789",
  appId: "1:887808408789:web:e562708c1d3dcf67ffb65c",
  measurementId: "G-12SRV15HLE"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);