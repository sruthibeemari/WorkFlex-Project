// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB22tZiD1xF0PgIAp10UUHZXhJlKwqAPRI",
    authDomain:  "dynamic-workspace-finder.firebaseapp.com",
    projectId: "dynamic-workspace-finder",
    storageBucket: "dynamic-workspace-finder.firebasestorage.app",
    messagingSenderId: "139655360172",
    appId: "1:139655360172:web:8759888ae69b308350f909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
