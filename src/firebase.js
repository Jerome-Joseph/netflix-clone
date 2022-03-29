import firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0uzsOCRboVJqRMZvBJsiZW14wV1hM0D4",
    authDomain: "netflix-clone-d57f4.firebaseapp.com",
    projectId: "netflix-clone-d57f4",
    storageBucket: "netflix-clone-d57f4.appspot.com",
    messagingSenderId: "995707973735",
    appId: "1:995707973735:web:6b42d6362eba8e581ee4c2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;