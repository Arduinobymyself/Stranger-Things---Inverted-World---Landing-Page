
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAzkJiH-yrQQrN1nD9X2O4kil_5Ymv54Nk",
    authDomain: "strangerthings-invertedworld.firebaseapp.com",
    projectId: "strangerthings-invertedworld",
    storageBucket: "strangerthings-invertedworld.appspot.com",
    messagingSenderId: "210648244337",
    appId: "1:210648244337:web:6ad06acb8c0042c27b7bd0",
    measurementId: "G-99LC8MNJK1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  export default app;