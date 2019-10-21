function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw 'Must provide number as first argument';
      }
      success(2 * value);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}

const successCallback = (x) => console.log(`Success: ${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);

double(3, successCallback, failureCallback); 
double('b', successCallback, failureCallback);

// Success: 6 (printed after roughly 1000ms) 
// Failure: Must provide number as first argument (printed after roughly 1000ms)
FailureHandlingExample01.js
