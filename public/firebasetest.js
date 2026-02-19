const input = document.getElementById('dbInput');
const button1 = document.getElementById('dbButton1');
const button2 = document.getElementById('dbButton2');
const button3 = document.getElementById('dbButton3');
const ul = document.getElementById('dbList');

button1.addEventListener('click', dbWriteLocal);
button2.addEventListener('click', dbReadLocal);
button3.addEventListener('click', dbClearLocal);

alert("JS GO");
    
async function dbWriteLocal() {
    alert("dbWrite()");
    let inputValue = input.value;
    if (!inputValue) return;
    await window.dbWrite("testList", {test1:inputValue});
    input.value = "";
}

async function dbReadLocal() {
    alert("dbRead()");
    const list = await window.dbRead('testList');

    ul.innerHTML = "";
    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.test1;
        ul.appendChild(li);
    });
}

async function dbClearLocal() {
    alert("dbClear()");
    await window.dbClear('testList')
    await dbReadLocal();
}


/*
// Write:
await addDoc(collection(db, 'COLLECTION_NAME'), DATA_OBJECT);

// Read:
const snapshot = await getDocs(collection(db, 'COLLECTION_NAME'));
const list = snapshot.docs.map(doc => doc.data());
*/
