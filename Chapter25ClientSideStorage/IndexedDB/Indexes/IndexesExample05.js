const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    index = store.index("username"),
    request = index.get("007");
request.onsuccess = (event) => {
  // handle success
};
request.onfailure = (event) => {
  // handle failure
}; 
