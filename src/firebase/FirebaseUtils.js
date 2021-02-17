import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkjNbZyJGOU4a8Wlgxwb1KR_pQxnl41WM",
    authDomain: "crown-db-at.firebaseapp.com",
    projectId: "crown-db-at",
    storageBucket: "crown-db-at.appspot.com",
    messagingSenderId: "150208332198",
    appId: "1:150208332198:web:cc1ddb4ef590944c348f67",
    measurementId: "G-90V1TVXGR8"
};

export const createUserProfileDocument = async (userAuth, addionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

export const createUserWithEmailAndPassword = async () => {
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;