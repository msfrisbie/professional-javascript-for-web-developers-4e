let num = 25;
switch (true) {
  case num < 0: 
    console.log("Less than 0.");
    break;
  case num >= 0 && num <= 10: 
    console.log("Between 0 and 10.");
    break;
  case num > 10 && num <= 20: 
    console.log("Between 10 and 20.");
    break;
  default: 
    console.log("More than 20.");
}
