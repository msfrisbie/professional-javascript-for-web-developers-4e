function process(values){
  values.sort();
                 
  for (let value of values){
    if (value > 100){
      return value;
    }
  }
                   
  return -1;
}
