// this throws an error because oldValue is undeclared
var newValue = oldValue;
// this doesn't throw an error, because it's a property lookup
// newValue is set to undefined
var newValue = window.oldValue;
