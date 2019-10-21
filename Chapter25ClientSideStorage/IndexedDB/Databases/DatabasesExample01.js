let db, 
    request,
    version = 1;
    
request = indexedDB.open("admin", version);
request.onerror = (event) => 
  alert(`Failed to open: ${event.target.errorCode}`);
request.onsuccess = (event) => {
  db = event.target.result;
};
