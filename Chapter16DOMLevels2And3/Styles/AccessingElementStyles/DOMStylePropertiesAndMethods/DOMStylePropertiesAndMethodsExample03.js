let prop, value, i, len;
for (i = 0, len = myDiv.style.length; i < len; i++) {
  prop = myDiv.style[i];   // alternately, myDiv.style.item(i)
  value = myDiv.style.getPropertyValue(prop);
  console.log(`prop: ${value}`);   
}
