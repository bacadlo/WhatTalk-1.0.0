// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {
  initializeFirestore,
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  setDoc,
  doc,
  addDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNfkdEHo0OgKwyiOgt_lM5xdgazhxO36c',
  authDomain: 'whattalk-v1.firebaseapp.com',
  projectId: 'whattalk-v1',
  storageBucket: 'whattalk-v1.appspot.com',
  messagingSenderId: '53870068775',
  appId: '1:53870068775:web:f137079654be9eeb553a02',
  measurementId: 'G-1SEZGTHQE7',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp, {
  experimentalForceLongPolling: true
});


export const signIn = async (email, password, navigation) => {
  const [user, setUser] = useState('');
  const [initializing, setInitializing] = useState(true);
  try {
    await signInWithEmailAndPassword(auth, email, password);
    onAuthStateChanged = user => {
      setUser(user);
      if (initializing) setInitializing(false);
      if (user) {
        navigation.navigate('Home');
      } else if (!user) {
        navigation.navigate('SignIn');
      }
    };
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
    if (initializing) return null;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)        
  } catch (err) {
    console.error(err);
    alert(err.message);
  }  
};

export const forgotPassword = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = async navigation => {
  try {
    await signOut(auth);
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigation.navigate('SignIn');
      }
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
