request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {  // always check
    console.log(`Key: ${cursor.key}, Value: ${JSON.stringify(cursor.value)}`);
    cursor.continue();  // go to the next one
  } else {
    console.log("Done!");
  }
};
