import { Firebase } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDZMBdADok3iXF195jNkXnMESnNQ8751es",
        authDomain: "crwn-db-30297.firebaseapp.com",
        projectId: "crwn-db-30297",
        storageBucket: "crwn-db-30297.appspot.com",
        messagingSenderId: "162056911150",
        appId: "1:162056911150:web:67f95fe9a7c85032c662bf",
        measurementId: "G-VMKS1P2ZJD"
}

Firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;