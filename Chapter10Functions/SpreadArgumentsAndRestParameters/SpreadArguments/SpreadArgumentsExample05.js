let values = [1,2,3,4]

function countArguments() {
  console.log(arguments.length);
}

countArguments(-1, ...values);         // 5
countArguments(...values, 5);          // 5
countArguments(-1, ...values, 5);      // 6
countArguments(...values, ...[5,6,7]); // 7
