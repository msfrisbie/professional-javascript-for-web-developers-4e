const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    request = store.get("007");
request.onerror = (event) => alert("Did not get the object!");
request.onsuccess = (event) => alert(event.target.result.firstName);
