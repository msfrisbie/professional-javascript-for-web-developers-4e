const store = db.transaction("users").objectStore("users"),
    range = IDBKeyRange.bound("007", "ace");
    request = store.openCursor(range);
request.onsuccess = function(event){
  const cursor = event.target.result;
  if (cursor) {  // always check
    console.log(`Key: ${cursor.key}, Value: ${JSON.stringify(cursor.value)}`);
    cursor.continue();  // go to the next one
  } else {
    console.log("Done!");
  }
}; 
