// Inline block scope
{
  let i;
  for (i = 0; i < count; i++) {
    console.log(i);
  }
} 
console.log(i);  // Throws an error


// Function block scope
for (let i = 0; i < count; i++) {
  console.log(i);
}
    
console.log(i);  // Throws an error
