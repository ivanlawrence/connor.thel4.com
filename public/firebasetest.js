import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAX66iMaz-FquSA5QqzCOz2hUba0iYAu3o",
    authDomain: "connor-thel4.firebaseapp.com",
    databaseURL: "https://connor-thel4-default-rtdb.firebaseio.com",
    projectId: "connor-thel4",
    storageBucket: "connor-thel4.firebasestorage.app",
    messagingSenderId: "132187590100",
    appId: "1:132187590100:web:bd5638f0ee58b31cb19a41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const input = document.getElementById('dbInput');
const button1 = document.getElementById('dbButton1');
const button2 = document.getElementById('dbButton2');
const button3 = document.getElementById('dbButton3');
const ul = document.getElementById('dbList');

button1.addEventListener('click', dbWrite);
button2.addEventListener('click', dbRead);
button3.addEventListener('click', dbClear);
    
async function dbWrite() {
    let inputValue = input.value;
    if (!inputValue) return;
    await addDoc(collection(db, 'testList'), {test1:inputValue});
    input.value = '';
}

async function dbRead() {
    const snapshot = await getDocs(collection(db, 'testList'));
    const list = snapshot.docs.map(doc => doc.data());

    ul.innerHTML = '';
    list.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.test1;
        ul.appendChild(li);
    });
}

async function dbClear() {
    const snapshot = await getDocs(collection(db, 'testList'));
    const list = snapshot.docs.map(doc => doc.id);
    for (let id of list) {
        await deleteDoc(doc(db, 'testList', id));
    }
    await dbRead();  // refresh list after clearing
}


/*
// Write:
await addDoc(collection(db, 'COLLECTION_NAME'), DATA_OBJECT);

// Read:
const snapshot = await getDocs(collection(db, 'COLLECTION_NAME'));
const list = snapshot.docs.map(doc => doc.data());
*/
