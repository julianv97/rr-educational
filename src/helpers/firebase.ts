import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3O-zNZEpvdV0IW-edoGwekU3ggqVb5Ko',
  authDomain: 'rr-educational.firebaseapp.com',
  projectId: 'rr-educational',
  storageBucket: 'rr-educational.appspot.com',
  messagingSenderId: '202212711847',
  appId: '1:202212711847:web:a2df3a74d3ba00f28d6a82',
  measurementId: 'G-SDG60R27BV',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };
