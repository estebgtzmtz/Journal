import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

//const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  //apiKey: 'AIzaSyCEFEGE_7s6rSWW4VWF_GEUwMKCPUOOCNY',
  //authDomain: "react-curso-28959.firebaseapp.com",
  //projectId: "react-curso-28959",
  //storageBucket: "react-curso-28959.appspot.com",
  // messagingSenderId: `${import.meta.env.VITE_FIREBASE_API_MESSAGIN_SENDER_ID}`,
  //messagingSenderId: '28525836881',
  // appId: `${import.meta.env.VITE_FIREBASE_API_ID}`
  //appId: '1:28525836881:web:5ae1ce558a33915da4d670'
//};

console.log(import.meta.env)
const firebaseConfig = {
  apiKey: "AIzaSyAgn4Hc9-bOLnlwfQVGuqU9f8YtoabGmes",
  authDomain: "easy-tickets-9d40c.firebaseapp.com",
  projectId: "easy-tickets-9d40c",
  storageBucket: "easy-tickets-9d40c.appspot.com",
  messagingSenderId: "1055712863538",
  appId: "1:1055712863538:web:81441fc3f8af0b3aa8232b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)