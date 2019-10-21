function getSelectedOptions(selectbox){
  let result = new Array();
   
  for (let option of selectbox.options) {
    if (option.selected) {
      result.push(option);
    }
  }

  return result;
} 
