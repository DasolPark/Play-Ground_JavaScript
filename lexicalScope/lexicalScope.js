var x = 1;

function foo() {
  var x = 100;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();
