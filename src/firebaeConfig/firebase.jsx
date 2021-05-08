import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBGGT-aayFRcb8h4wViYIzNmNhEMmTwCmk",
    authDomain: "student-diary-e8803.firebaseapp.com",
    projectId: "student-diary-e8803",
    storageBucket: "student-diary-e8803.appspot.com",
    messagingSenderId: "198192981406",
    appId: "1:198192981406:web:670b1d0678304e2c35a28f",
    measurementId: "G-6YXWDKV40R"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth,db};