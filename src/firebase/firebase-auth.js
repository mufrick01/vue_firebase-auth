import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import firebaseApp from './firebase.config';

const auth = getAuth(firebaseApp);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
