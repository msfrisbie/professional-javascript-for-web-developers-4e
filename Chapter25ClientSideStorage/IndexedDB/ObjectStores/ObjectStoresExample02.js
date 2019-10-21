request.onupgradeneeded = (event) => {
  const db = event.target.result;
  
  // Delete the current objectStore if it exists. This is useful for testing, 
  // but this will wipe existing data each time this event handler executes.
  if (db.objectStoreNames.contains("users")) {
    db.deleteObjectStore("users");
  }
  
  db.createObjectStore("users", { keyPath: "username" });
};
