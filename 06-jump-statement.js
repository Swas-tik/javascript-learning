for (var index = 0; index <= 10; index++) {
  // index++   index=index+1

  console.log(index);

  if (index == 5) {
    break;
  }
}

console.log("continue statements");

for (var index = 1; index <= 5; index++) {
  // index++   index=index+1

  if (index == 2) {
    continue;
  }

  console.log(index); // 1
}
