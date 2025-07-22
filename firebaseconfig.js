import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCE0Hz7RpJyeFlgMv5WXQVxXNOuSFZwSSc",
  authDomain: "auto-care-5198d.firebaseapp.com",
  projectId: "auto-care-5198d",
  storageBucket: "auto-care-5198d.appspot.com",
  messagingSenderId: "864086007373",
  appId: "1:864086007373:web:32e960cacd73882924c604",
  measurementId: "G-MTDNLWBTE2"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
