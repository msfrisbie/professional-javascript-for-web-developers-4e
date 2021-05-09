// Also a departure from function declarations, which are function scoped, class declarations are block scoped:

{
  function FunctionDeclaration() {}
  class ClassDeclaration {}
}
 
console.log(FunctionDeclaration);  // FunctionDeclaration() {}
console.log(ClassDeclaration); 
 
// ReferenceError: ClassDeclaration is not defined