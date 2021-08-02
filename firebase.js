import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyAtV-ASyFgkTAT1jqxiaD6ETct17BuYzB8",
   authDomain: "facebook-clone-32803.firebaseapp.com",
   projectId: "facebook-clone-32803",
   storageBucket: "facebook-clone-32803.appspot.com",
   messagingSenderId: "416795362870",
   appId: "1:416795362870:web:ffda6b09ce51aa0f76ba97",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
