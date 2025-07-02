// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCE0Hz7RpJyeFlgMv5WXQVxXNOuSFZwSSc",
  authDomain: "auto-care-5198d.firebaseapp.com",
  projectId: "auto-care-5198d",
  storageBucket: "auto-care-5198d.firebasestorage.app",
  messagingSenderId: "864086007373",
  appId: "1:864086007373:web:32e960cacd73882924c604",
  measurementId: "G-MTDNLWBTE2"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Set up persistent authentication
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
