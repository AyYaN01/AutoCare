// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCE0Hz7RpJyeFlgMv5WXQVxXNOuSFZwSSc",
    authDomain: "auto-care-5198d.firebaseapp.com",
    projectId: "auto-care-5198d",
    storageBucket: "auto-care-5198d.firebasestorage.app",
    messagingSenderId: "864086007373",
    appId: "1:864086007373:web:32e960cacd73882924c604",
    measurementId: "G-MTDNLWBTE2"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
