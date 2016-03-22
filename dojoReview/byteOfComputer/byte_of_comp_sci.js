//Focused on understanding how the computer stores information into bits as well as learning the difference between recursion and iteration.

function rBS(arr, num){
  if()
}

function iFib(num){
  var fibs = [0, 1];
  for(var i = 0; i < num; i++){
    fibs.push(fibs[0] + fibs[1]);
    fibs.shift();
  }
  return fibs[0]
}

function rFib(num){
  if(num === 1 || num === 2){
    return 1;
  }
  else {
    return rFib(n - 1) + rFib(n - 2);
  }
}



