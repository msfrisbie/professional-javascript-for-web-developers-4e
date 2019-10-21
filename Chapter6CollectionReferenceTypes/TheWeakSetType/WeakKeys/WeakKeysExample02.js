const ws = new WeakSet();

const container = {
  val: {}
};

ws.add(container.val);

function removeReference() 
  container.val = null;
}
