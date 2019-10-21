try {
  someFunction();
} catch (error){
  if (error instanceof TypeError){
    //handle type error
  } else if (error instanceof ReferenceError){
    // handle reference error
  } else {
    // handle all other error types
  }
}
