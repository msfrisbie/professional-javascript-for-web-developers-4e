let selectbox = document.getElementById("selLocation");
let selectedOptions = getSelectedOptions(selectbox);
let message = "";
            
for (let option of selectedOptions) {
  message += `Selected index: ${option.index}\n` +
             `Selected text: ${option.text}\n` +
             `Selected value: ${option.value}\n`
}

console.log(message);
