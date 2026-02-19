import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAX66iMaz-FquSA5QqzCOz2hUba0iYAu3o",
    authDomain: "connor-thel4.firebaseapp.com",
    //databaseURL: "https://connor-thel4-default-rtdb.firebaseio.com",
    projectId: "connor-thel4",
    storageBucket: "connor-thel4.firebasestorage.app",
    messagingSenderId: "132187590100",
    appId: "1:132187590100:web:bd5638f0ee58b31cb19a41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.dbWrite = async function(collectionName, data) {
    await addDoc(collection(db, collectionName), data);
}

window.dbRead = async function(collectionName) {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

window.dbClear = async function(collectionName) {
    const snapshot = await getDocs(collection(db, collectionName));
    for (let docItem of snapshot.docs) {
        await deleteDoc(doc(db, collectionName, docItem.id));
    }
}