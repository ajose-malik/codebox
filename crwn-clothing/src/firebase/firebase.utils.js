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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date().toLocaleDateString();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (err) {
			console.log("error creating use", err.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
