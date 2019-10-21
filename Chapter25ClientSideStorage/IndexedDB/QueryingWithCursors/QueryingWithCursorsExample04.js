request.onsuccess = (event) => {
  const cursor = event.target.result;
  let value,
      deleteRequest;
  if (cursor) {  // always check
    if (cursor.key == "foo") {
      deleteRequest = cursor.delete();  // request the value be deleted
      deleteRequest.onsuccess = () => {
        // handle success;
      };
      deleteRequest.onfailure = () => {
        // handle failure
      };
    }
  }
};
