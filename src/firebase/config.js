import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "fotugilheri.firebaseapp.com",
    projectId: "fotugilheri",
    storageBucket: "fotugilheri.appspot.com",
    messagingSenderId: "690045049857",
    appId: "1:690045049857:web:6d02b96c25b6edec0c3400"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
