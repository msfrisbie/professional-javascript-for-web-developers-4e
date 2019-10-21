const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    request = store.openCursor();
request.onsuccess = (event) => {
  // handle success
};
request.onfailure = (event) => {
  // handle failure
};
