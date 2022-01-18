import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt1qb0UHHXUJgLr6Qqiz3AsEV0q2Kl22k",
  authDomain: "disney-plus-clone-bec02.firebaseapp.com",
  projectId: "disney-plus-clone-bec02",
  storageBucket: "disney-plus-clone-bec02.appspot.com",
  messagingSenderId: "1014508232825",
  appId: "1:1014508232825:web:1c1cbcdf7398f54c2eb4a8",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
