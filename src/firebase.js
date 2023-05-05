// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDGCFw2aqYzvdlg-zuqOiwqIsBqK3ZNrh8",

  authDomain: "fatcat-freelancer.firebaseapp.com",

  projectId: "fatcat-freelancer",

  storageBucket: "fatcat-freelancer.appspot.com",

  messagingSenderId: "719165268324",

  appId: "1:719165268324:web:616a8e1e9fad7d79cc1a71",

  measurementId: "G-37W99H6VGX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);