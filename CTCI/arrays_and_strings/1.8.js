//  Assume you have a method isSubstring which checks if one word is a
// substring of another. Given two strings, si and s2, write code to check if s2 is
// a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rotation
// of "erbottlewat").

var s1 = 'waterbottle'
var s2 = 'erbottlewat'

function isSubstring(s1, s2) {
  var A = s2.split("");
  var K = s2.length;
  var leng = A.length;
  var temp;
  var k = 0;
  for(var i = leng-1; i > 0; i--) {
    if(i === leng-1){
      temp = A[leng-1];
    }

    A[i] = A[i-1]

    if(i === 1){
      A[0] = temp;
      k++;
    }
    console.log(k);
    if(i === 1 && k <= K){
      s2 = A;
      s2 = s2.join("");
      console.log(s1, s2);
      if(s1 === s2){
        return true;
      } else {
        i = leng;
      }
    }
  }

  return false
}


console.log(isSubstring(s1, s2));
