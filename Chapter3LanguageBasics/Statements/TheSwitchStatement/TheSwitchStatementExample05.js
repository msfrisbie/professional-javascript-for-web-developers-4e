switch ("hello world") {
  case "hello" + " world": 
    console.log("Greeting was found.");
    break;
  case "goodbye": 
    console.log("Closing was found.");
    break;
  default: 
    console.log("Unexpected message was found.");
}
