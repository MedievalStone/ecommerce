import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
                apiKey: "AIzaSyB9BPalb8B8QuvNZ4MYrKlbp-5KYIMAUKI",
                authDomain: "crwn-db-65771.firebaseapp.com",
                projectId: "crwn-db-65771",
                storageBucket: "crwn-db-65771.appspot.com",
                messagingSenderId: "737879107493",
                appId: "1:737879107493:web:66feb200b97b4500e4aa4c",
                measurementId: "G-WLRNMZZFG4"
                };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
