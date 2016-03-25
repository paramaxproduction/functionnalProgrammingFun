// Playing with Closures

// without Closure:

var count = 0;

function counter() {
  count += 1;
  return count;
}

console.log(counter());
console.log(counter());
console.log(counter());

// With a Closure (it's own environment that won't clash):

function makeCounter() {
  var count = 0;

  function counter() {
    count += 1;
    return count;
  }
  return counter;
}

var doCount = makeCounter(); //Reference to makeCounter function

console.log(doCount());
console.log(doCount());
console.log(doCount());
