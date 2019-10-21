const transaction = db.transaction("users"),
    store = transaction.objectStore("users"),
    request = store.openCursor(null, "nextunique");
