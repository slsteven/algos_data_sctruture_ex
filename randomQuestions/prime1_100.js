function prime(num){
  var primes = [];
  for(var i = 1; i <= num; i++){
    if(i === 2){
      primes.push(i);
    }
    else {
      var prime_leng = primes.length;
      for(var j = 0; j < prime_leng; j++){
        if(i % primes[j] === 0){
          break;
        }
        else if(j === prime_leng - 1) {
          primes.push(i);
        }
      }
    }
  }
  return primes
}


console.log(prime(100));

//2,3,5,7,11,13,17...
