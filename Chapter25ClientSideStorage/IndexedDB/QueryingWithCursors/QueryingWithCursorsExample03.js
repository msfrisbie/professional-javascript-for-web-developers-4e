request.onsuccess = (event) => {
  const cursor = event.target.result;
  let value,
      updateRequest;
  if (cursor) {  // always check
    if (cursor.key == "foo") {
      value = cursor.value;                 // get current value
      value.password = "magic!";            // update the password
      updateRequest = cursor.update(value);  // request the update be saved
      updateRequest.onsuccess = () => {
        // handle success;
      };
      updateRequest.onfailure = () => {
        // handle failure
      };
    }
  }
};
