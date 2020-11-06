import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAbh3k8hvB8yyIL3XP4fmrfV_muUgLtoNQ",
    authDomain: "aicheiitr-b3b38.firebaseapp.com",
    databaseURL: "https://aicheiitr-b3b38.firebaseio.com",
    projectId: "aicheiitr-b3b38",
    storageBucket: "aicheiitr-b3b38.appspot.com",
    messagingSenderId: "532155299453",
    appId: "1:532155299453:web:2f3c3aaccb20dba9666314"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage()
const firestore = firebase.firestore()

export { storage, firestore }