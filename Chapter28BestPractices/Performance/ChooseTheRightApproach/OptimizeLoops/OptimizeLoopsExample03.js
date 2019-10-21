let i = values.length-1;
if (i > -1) {
  do {
    process(values[i]);
  }while(--i >= 0);
}
