const disabledElements = new WeakSet();

const loginButton = document.querySelector('#login');

// Tags the node as "disabled" by adding it to the corresponding set
disabledElements.add(loginButton);
