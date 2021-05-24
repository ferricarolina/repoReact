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


//Callback custom functions
export function consultar(consulta){
    var promise = new Promise(function(resolve, reject) {
        consulta.get().then((query) => {
            if(query.size === 0){
                console.log('No results!')
            }
            console.log('Items found!')
            const data = query.docs.map(doc => doc.data())
            resolve(data)
        }).catch((error) => {
            console.log('Error serching items', error)
            reject(error)
        })
    });
    return promise;
}

export function agregar(collection, data){
    
    data.date = firebase.firestore.Timestamp.fromDate(new Date())
    
    var promise = new Promise(function(resolve, reject) {
        collection.add(data).then(({id}) => {
            console.log('New item created!')
            resolve(id)
        }).catch((error) => {
            console.log('Error creating item: ', error)
            reject(error)
        })
    });
    return promise;
}