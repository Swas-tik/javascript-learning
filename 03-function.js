// Type 1: Function with no argument and no return type

// Function Declaration

function show() {
  console.log("Inside show function...");

  console.log("================");
}
// Function call or Invocation
show();
show();
show();

// Type 2: Function with argument and no return type

function square(num) {
  console.log("Given number to square: ", num);
  var result = num * num;
  console.log("Square is: ", result);
  console.log("----------------------------");
}

square(2);
square(5);
square(19);
square(190890);

// Type 3: Function with argument and return value

function multiply(n1, n2, n3) {
  console.log("Given numbers: ", n1, n2, n3);

  var result = n1 * n2 * n3;

  return result;
}

var returnValue = multiply(10, 2, 2);
console.log("Multiplication is: ", returnValue);
console.log("======================");
var resultValue = multiply(50, 70, 80);
console.log("Multiplication is: ", resultValue);
