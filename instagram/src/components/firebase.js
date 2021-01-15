import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyApi2OnTi-EX4VfrtOCu23auXHTNScD32Y",
    authDomain: "instagram-but-fake.firebaseapp.com",
    projectId: "instagram-but-fake",
    storageBucket: "instagram-but-fake.appspot.com",
    messagingSenderId: "1093161733252",
    appId: "1:1093161733252:web:7018a892c5e41fe97186d1",
    measurementId: "G-XHG9DQRN0Z"
});

let auth=firebase.auth()
let storage=firebase.storage()
let db=firebase.firestore()

export{
    firebase, auth, storage, db
}