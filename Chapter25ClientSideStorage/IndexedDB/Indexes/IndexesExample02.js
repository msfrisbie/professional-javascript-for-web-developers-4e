const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    index = store.index("username");
