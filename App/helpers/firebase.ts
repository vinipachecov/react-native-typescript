import firebase from 'firebase';
import { env } from '../../env';

export function initFirebase() {
  const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    databaseURL: env.databaseURL,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
