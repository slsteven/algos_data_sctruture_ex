//reverse a string

var foobar = "foo";

function reverse(str) {
  var rev = '';
  for (var i = str.length-1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

//reverse in place
function reverse2(str) {
  var temp = '';
  var mid = str.length/2;

  var str = str.split("");

  for(var i = 0; i < mid; i++){
    temp = str[i];
    str[i] = str[str.length -1 - i];
    str[str.length -1 - i] = temp;
  }
  return str;
}

console.log(reverse2(foobar));
