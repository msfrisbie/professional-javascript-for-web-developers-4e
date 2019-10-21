class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
    this.message = message;
  }
}
                   
throw new CustomError("My message");
ThrowingErrorsExample01.js
