// class declaration
class Person {}

// class expression
const Animal = class {};
Like function expressions, class expressions cannot be referenced until they are evaluated in execution. However, an important departure from the parallel behavior of function definition is that, while function declarations are hoisted, class declarations are not: 
console.log(FunctionExpression);  // undefined
var FunctionExpression = function() {};
console.log(FunctionExpression);  // function() {}


console.log(FunctionDeclaration); // FunctionDeclaration() {}
function FunctionDeclaration() {}
console.log(FunctionDeclaration); // FunctionDeclaration() {}


console.log(ClassExpression);     // undefined
var ClassExpression = class {};
console.log(ClassExpression);     // class {}


console.log(ClassDeclaration);    // ReferenceError: ClassDeclaration is not defined
class ClassDeclaration {}
console.log(ClassDeclaration);    // class ClassDeclaration {}
