const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    store.deleteIndex("username");
