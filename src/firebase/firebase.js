import firebase from 'firebase'


const firebaseConfig = {
	apiKey: 'AIzaSyDtgdRBltYLdVMCRnSvoTPVUOyupwAq0Nw',
	authDomain: 'linkedln-clone-6eb83.firebaseapp.com',
	projectId: 'linkedln-clone-6eb83',
	storageBucket: 'linkedln-clone-6eb83.appspot.com',
	messagingSenderId: '713898969059',
	appId: '1:713898969059:web:4593146704cfbeb0dc82d6',
};
 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };