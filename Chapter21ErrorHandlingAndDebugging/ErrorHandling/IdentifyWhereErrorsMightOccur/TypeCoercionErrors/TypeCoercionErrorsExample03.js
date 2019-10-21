function concat(str1, str2, str3){
  let result = str1 + str2;
  if (typeof str3 === "string") {  // proper comparison
    result += str3;
  }
  return result;
}
