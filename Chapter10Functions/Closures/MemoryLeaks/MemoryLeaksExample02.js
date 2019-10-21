function assignHandler() {
  let element = document.getElementById('someElement');
  let id = element.id;
                   
  element.onclick = () => console.log(id);                   
    
  element = null;
}
