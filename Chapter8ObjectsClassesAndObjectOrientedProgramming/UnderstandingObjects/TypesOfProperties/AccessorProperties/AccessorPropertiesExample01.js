// Define object with pseudo-private member 'year_'
// and public member 'edition'
let book = {
  year_: 2017,
  edition: 1
};
  
Object.defineProperty(book, "year", {
  get() {
    return this.year_;
  },
  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue;
      this.edition += newValue - 2017;
    }
  }
});
book.year = 2018;
console.log(book.edition);  // 2
ObjectDefinePropertyExample01.js
In this code, an object book is created with two default properties: year_ and edition. The underscore on year_ is a common notation to indicate that a property is not intended to be accessed from outside of the object’s methods. The year property is defined to be an accessor property where the getter function simply returns the value of year_ and the setter does some calculation to determine the correct edition. So changing the year property to 2018 results in both year_ and edition changing to 2. This is a typical use case for accessor properties, when setting a property value results in some other changes to occur.
