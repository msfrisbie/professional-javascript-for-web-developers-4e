function hasPrototypeProperty(object, name){
  return !object.hasOwnProperty(name) && (name in object);
}
