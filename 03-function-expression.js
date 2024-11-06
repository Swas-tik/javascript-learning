// Function Expression

var addThreeValues = function (n1, n2, n3) {
  console.log(n1, n2, n3);

  var result = n1 + n2 + n3;

  console.log(result);
};

addThreeValues(10.23, 600, 40);

addThreeValues("Hello", " Good", " Morning");

var square = function () {
  console.log(`Square of 89 is ${89 * 89}`);
};

square();
