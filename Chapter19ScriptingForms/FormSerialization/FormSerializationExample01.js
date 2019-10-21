function serialize(form) {
  let parts = [];
  let optValue;

  for (let field of form.elements) {
    switch(field.type) {
      case "select-one":
      case "select-multiple":
        if (field.name.length) {
        for (let option of field.options) {
            if (option.selected) {
              if (option.hasAttribute){
                optValue = (option.hasAttribute("value") ? 
                            option.value : option.text);
              } else {
                optValue = (option.attributes["value"].specified ? 
                            option.value : option.text);
              }
              parts.push(encodeURIComponent(field.name)} + "=" +  
                         encodeURIComponent(optValue));
            }
          }
        }
        break;
      case undefined:     // fieldset
      case "file":        // file input
      case "submit":      // submit button
      case "reset":       // reset button
      case "button":      // custom button
        break;
      case "radio":       // radio button
      case "checkbox":    // checkbox
        if (!field.checked) {
          break;
        }
      default:
        // don't include form fields without names
        if (field.name.length) {
          parts.push(`${encodeURIComponent(field.name)}=` +  
                     `${encodeURIComponent(field.value)}`);

        }
  }     
  return parts.join("&");
}
