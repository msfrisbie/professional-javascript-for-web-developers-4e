let keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys);   // "constructor,name,age,job,sayName"
Note the inclusion of the non-enumerable constructor property in the list of results. Both Object.keys() and Object.getOwnPropertyNames() may be suitable replacements for using for-in. 
