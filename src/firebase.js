import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOIpnigfSZJ2Y8IUGDilPJshtzZ9CQFLc",
    authDomain: "disney-clone-d2b94.firebaseapp.com",
    projectId: "disney-clone-d2b94",
    storageBucket: "disney-clone-d2b94.appspot.com",
    messagingSenderId: "484543819767",
    appId: "1:484543819767:web:57a8f9bb969873c99fc8f2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;