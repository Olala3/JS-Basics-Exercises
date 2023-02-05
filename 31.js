function sayHelloName(printName) {
  console.log("Hello");
  printName();
}

function printName() {
  console.log("Name");
}

sayHelloName(printName);
