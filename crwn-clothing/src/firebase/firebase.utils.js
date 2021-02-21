import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyA5RjqDpd1PATQ61q-b4ZWtySSspCWFNO4",
	authDomain: "crwn-db-10.firebaseapp.com",
	projectId: "crwn-db-10",
	storageBucket: "crwn-db-10.appspot.com",
	messagingSenderId: "873201414808",
	appId: "1:873201414808:web:5e7d14482ac41a15fdd6ed"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
