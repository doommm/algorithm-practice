const div = document.createElement('div');

function* foo() {
  var x = yield 10;
  console.log(x);
}

(() => {
  const f = foo();
  console.log(f.next());
  // console.log(f.next());
})();

Function.prototype.call, Function.prototype.apply;
