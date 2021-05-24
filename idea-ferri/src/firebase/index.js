import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCvH5XJh2Wvb8PHUdV6tgxZvwZWLeiTSVw",
  authDomain: "coderhouse-ecommerce-b047a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b047a",
  storageBucket: "coderhouse-ecommerce-b047a.appspot.com",
  messagingSenderId: "526460583590",
  appId: "1:526460583590:web:a2016ebc4026c61ace7e67",
  measurementId: "G-5TLLL2EMFE"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}