//recursion
function getToZero(n) {
  console.log(n);
  if (n === 0) {
    return true;
  };
  getToZero(n-1);
};
//getToZero(30);


function sum(x, y) {
  if (y > 0) {
    return sum(x+1, y-1);
  } else {
    return x;
  }
};
//console.log(sum(1, 10));


function fib(n) {
  if (n <= 2){
    return n;
  } else {
    return fib(n-1) + fib(n-2);
  };
};

