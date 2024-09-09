// Import necessary functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase configuration
const config = {
    apiKey: "AIzaSyDZMBdADok3iXF195jNkXnMESnNQ8751es",
    authDomain: "crwn-db-30297.firebaseapp.com",
    projectId: "crwn-db-30297",
    storageBucket: "crwn-db-30297.appspot.com",
    messagingSenderId: "162056911150",
    appId: "1:162056911150:web:67f95fe9a7c85032c662bf",
    measurementId: "G-VMKS1P2ZJD"
};

// Initialize Firebase
const firebaseApp = initializeApp(config);

// Initialize services
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Set up Google auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Sign in with Google popup
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebaseApp;
