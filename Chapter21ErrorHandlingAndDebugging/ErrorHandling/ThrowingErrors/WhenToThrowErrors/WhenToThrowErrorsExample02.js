function process(values){  
  if (!(values instanceof Array)){
    throw new Error("process(): Argument must be an array.");
  }

  values.sort();

  for (let value of values){
    if (value > 100){
      return value;
    }
  }

  return -1;
}
