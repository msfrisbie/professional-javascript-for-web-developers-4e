transaction.onerror = (event) => {
  // entire transaction was cancelled
};
transaction.oncomplete = (event) => {
  // entire transaction completed successfully
};
