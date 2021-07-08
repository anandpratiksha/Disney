import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSezrsKC7zm7e0u8mjraWR1PhgTKoSauQ",
    authDomain: "disneyplus-clone-c356d.firebaseapp.com",
    projectId: "disneyplus-clone-c356d",
    storageBucket: "disneyplus-clone-c356d.appspot.com",
    messagingSenderId: "192863321308",
    appId: "1:192863321308:web:a24da0fec279d1133ec819",
    measurementId: "G-7C19FHMQH0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;