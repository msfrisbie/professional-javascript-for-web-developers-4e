const wm = new WeakMap();

const container = {
  key: {}
};

wm.set(container.key, "val");

function removeReference() 
  container.key = null;
}
