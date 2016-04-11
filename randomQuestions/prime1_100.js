//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//2 is a prime

function prime(num){
  var primes = [];
  for (var i = 2; i <= num; i++) {
    if (i === 2) {
      primes.push(i);
    } else {
      var checkIfNumIsPrime = i;
      for (var j = 2; j < checkIfNumIsPrime; j++) {
        //not prime if remained is zero
        if (i % j === 0) {
          break;
        } else if (j === checkIfNumIsPrime -1 ) {
          primes.push(i);
        };
      };
    };
  };
  return primes;
};


console.log(prime(100));

//2,3,5,7,11,13,17...
