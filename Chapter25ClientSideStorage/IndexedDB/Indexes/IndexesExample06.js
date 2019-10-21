const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    index = store.index("username"),
    request = index.getKey("007");
request.onsuccess = (event) => {
  // handle success
  // event.result.key is the index key, event.result.value is the primary key
};
